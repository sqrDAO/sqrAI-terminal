import { notification } from "antd";

const BotReply = async (params: { message: string; sessionId: string }) => {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_API}/${process.env.NEXT_PUBLIC_AGENTID}/message`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          text: params.message,
          userId: params.sessionId || "User",
          roomId: `default-room-${process.env.NEXT_PUBLIC_AGENTID}`,
        }),
      }
    );
    const data = await res.json();
    return data;
  } catch (error) {
    notification.error({
      message: "Could not get data",
    });
    return false;
  }
};

export default BotReply;
