import { useQuery } from "@tanstack/react-query";

export const BotReply = async (params: {
  message: string;
  publicKey: string;
}) => {
  try {
    const res = await fetch(`/api/message`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        message: params.message,
        publicKey: params.publicKey || "User",
      }),
    });
    const data = await res.json();
    return data.data;
  } catch (error) {
    throw error;
  }
};

export const useBotAutoReply = (publicKey: string) => {
  return useQuery({
    queryKey: ["botAutoReply", publicKey],
    queryFn: async () => {
      const res = await fetch(`/api/messages?publicKey=${publicKey}`, {
        method: "GET",
        headers: { "Content-Type": "application/json" },
      });
      const data = await res.json();
      const newMessages = data.data.reduce((acc, message) => {
        acc[message.id] = {
          from: message.content.user === "codebot" ? "bot" : "user",
          value: message.content.text,
          createdAt: message.createdAt,
        };
        return acc;
      }, {});
      const sortedMessages = Object.values(newMessages).sort(
        (a: any, b: any) =>
          new Date(a.createdAt).getTime() - new Date(b.createdAt).getTime()
      );
      return sortedMessages;
    },
    refetchInterval: 10000, // Adjust the interval as needed
  });
};
