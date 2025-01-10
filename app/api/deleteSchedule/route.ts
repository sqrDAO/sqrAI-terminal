import { authOptions } from "../auth/[...nextauth]/authOptions";
import { getServerSession } from "next-auth";
import axios from "axios";
import { NextResponse } from "next/server";

const apiUrl = process.env.API_URL;

export async function DELETE(req) {
  const { searchParams } = new URL(req.url);
  const agentId = searchParams.get("agentId");
  const userId = searchParams.get("publicKey");
  const eventId = searchParams.get("eventId");
  const session = await getServerSession(authOptions as any);

  if (!session) {
    return new Response(JSON.stringify({ error: "Unauthorized: Session is not valid" }), {
      status: 401,
      headers: { "Content-Type": "application/json" },
    });
  }

  if (!userId || !eventId || !agentId) {
    return new Response(JSON.stringify({ error: "Missing query parameters" }), {
      status: 400,
      headers: { "Content-Type": "application/json" },
    });
  }

  try {
    const response = await axios.delete(`${apiUrl}/cals/events`, {
      params: { agentId, userId, eventId },
    });

    return NextResponse.json(response?.data);
  } catch (error) {
    console.error("Error delete schedules:", error);
    return new Response(JSON.stringify({ error: "Failed to delete schedules" }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }
}
