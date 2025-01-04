import axios from "axios";
import { NextRequest, NextResponse } from 'next/server';

const apiUrl = process.env.API_URL;
const agentId = process.env.NEXT_PUBLIC_AGENTID;

export async function GET() {
  try {
    const response = await axios.get(`${apiUrl}/agents/${agentId}`);
    return NextResponse.json(response?.data);
  } catch (error) {
    console.error("Error getting sample agent:", error);
    return NextResponse.error();
  }
}
