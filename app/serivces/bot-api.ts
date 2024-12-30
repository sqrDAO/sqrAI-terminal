import { useQuery } from "@tanstack/react-query";
import { notification } from "antd";
import { useState } from "react";
import { IChat } from "../types/types";
import { useSQRAI } from "../provider/sqrai.provider";

export const BotReply = async (params: {
  message: string;
  sessionId: string;
}) => {
  try {
    const res = await fetch(`/api/message`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        message: params.message,
        sessionId: params.sessionId || "User",
      }),
    });
    const data = await res.json();
    return data.data;
  } catch (error) {
    throw error;
  }
};

export const useBotAutoReply = (sessionId: string) => {
  // const [messages, setMessages] = useState<{ [key: string]: IChat }>({});
  return useQuery({
    queryKey: ["botAutoReply", sessionId],
    queryFn: async () => {
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_API}/${process.env.NEXT_PUBLIC_AGENTID}/messages?roomId=default-room-${process.env.NEXT_PUBLIC_AGENTID}-${sessionId}`,
        {
          method: "GET",
          headers: { "Content-Type": "application/json" },
          cache: "no-cache",
        }
      );
      if (!res.ok) {
        throw new Error("Network response was not ok");
      }
      const data = await res.json();
      // console.log('data', data);
      const newMessages = data.reduce((acc, message) => {
        acc[message.id] = {
          from: message.content.user === "codebot" ? "bot" : "user",
          value: message.content.text,
          createdAt: message.createdAt,
        };
        return acc;
      }, {});
      return newMessages;
      // setMessages((prevMessages) => ({ ...prevMessages, ...newMessages }));
      // return Object.values({ ...messages, ...newMessages }).sort(
      //   (a: IChat, b: IChat) => new Date(a.createdAt).getTime() - new Date(b.createdAt).getTime()
      // );
    },
    refetchInterval: 10000, // Adjust the interval as needed
  });
};
