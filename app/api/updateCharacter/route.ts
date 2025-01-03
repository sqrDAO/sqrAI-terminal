import axios from "axios";
import { NextRequest, NextResponse } from 'next/server';

const apiUrl = process.env.API_URL;

export async function POST(req: NextRequest) {
  try {
    const data = await req.json();
    const response = await axios.post(`${apiUrl}/agents`, data);
    return NextResponse.json(response?.data);
  } catch (error) {
    console.error("Error updating character:", error);
    return NextResponse.error();
  }
}
