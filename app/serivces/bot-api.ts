import { notification } from "antd";

const BotReply = async (params: { message: string; sessionId: string }) => {
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

export default BotReply;
