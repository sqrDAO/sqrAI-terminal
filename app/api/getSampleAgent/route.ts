import axios from "axios";
import getConfig from "next/config";
import { NextRequest, NextResponse } from 'next/server';

const apiUrl = getConfig().serverRuntimeConfig.NEXT_PUBLIC_API;

export async function GET() {
  try {
    const response = await axios.get(`${apiUrl}/agents/d1b9e94b-4448-02cc-bb43-4c2ba12fa15c`);
    return NextResponse.json(response?.data);
  } catch (error) {
    console.error("Error getting sample agent:", error);
    return NextResponse.error();
  }
}
