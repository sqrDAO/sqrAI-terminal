import axios from "axios";
import { NextRequest, NextResponse } from "next/server";
import { getServerSession } from "next-auth/next";
import { authOptions } from "../auth/[...nextauth]/authOptions";

const apiUrl = process.env.API_URL;
const agentId = process.env.NEXT_PUBLIC_AGENTID;

export async function GET() {
  const session = await getServerSession(authOptions as any);

  if (!session) {
    return new Response(JSON.stringify({ error: "Unauthorized: Session is not valid" }), {
      status: 401,
      headers: { "Content-Type": "application/json" },
    });
  }

  try {
    const response = await axios.get(`${apiUrl}/agents/${agentId}`);
    return NextResponse.json(response?.data);
  } catch (error) {
    console.error("Error getting sample agent:", error);
    return NextResponse.error();
  }
}
