import axios from "axios";
import { NextRequest, NextResponse } from "next/server";
import { getServerSession } from "next-auth/next";
import { authOptions } from "../auth/[...nextauth]/authOptions";

const apiUrl = process.env.API_URL;

export async function POST(req: NextRequest) {
  const session = await getServerSession(authOptions as any);

  if (!session) {
    return new Response(JSON.stringify({ error: "Unauthorized: Session is not valid" }), {
      status: 401,
      headers: { "Content-Type": "application/json" },
    });
  }

  try {
    const data = await req.json();
    const response = await axios.post(`${apiUrl}/agents`, data);
    return NextResponse.json(response?.data);
  } catch (error) {
    console.error("Error updating character:", error);
    return NextResponse.error();
  }
}
