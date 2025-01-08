import { authOptions } from "../auth/[...nextauth]/authOptions";
import { getServerSession } from "next-auth";
import axios from "axios";
import { NextResponse } from "next/server";

const apiUrl = process.env.API_URL;

async function fetchAgents() {
  try {
    const response = await axios.get(`${apiUrl}/agents`);
    return response?.data;
  } catch (error) {
    console.error("Error getting sample agent:", error);
    throw new Error(error);
  }
}

export async function GET(req) {
  const { searchParams } = new URL(req.url);
  const userId = searchParams.get("publicKey");
  const session = await getServerSession(authOptions as any);

  if (!session) {
    return new Response(JSON.stringify({ error: "Unauthorized: Session is not valid" }), {
      status: 401,
      headers: { "Content-Type": "application/json" },
    });
  }

  if (!userId) {
    return new Response(JSON.stringify({ error: "Missing query parameters" }), {
      status: 400,
      headers: { "Content-Type": "application/json" },
    });
  }

  try {
    const agents = await fetchAgents();
    const agentId = agents?.agents[0]?.id; // Assuming you want the first agent's ID

    if (!agentId) {
      return new Response(JSON.stringify({ error: "No agents found" }), {
        status: 404,
        headers: { "Content-Type": "application/json" },
      });
    }

    const response = await axios.get(`${apiUrl}/cals/events`, {
      params: { agentId, userId },
    });
    
    return NextResponse.json(response?.data);
  } catch (error) {
    console.error("Error getting schedules:", error);
    return new Response(JSON.stringify({ error: "Failed to get schedules" }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }
}
