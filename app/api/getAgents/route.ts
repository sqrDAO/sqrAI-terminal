import axios from "axios";
import getConfig from "next/config";
import { NextResponse } from "next/server";

const { serverRuntimeConfig } = getConfig();
const apiUrl = process.env.API_URL;

export async function GET() {
  try {
    const response = await axios.get(`${apiUrl}/agents`);
    return NextResponse.json(response?.data);
  } catch (error) {
    console.error("Error getting sample agent:", error);
    return NextResponse.error();
  }
}
