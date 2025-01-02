
import { NextRequest, NextResponse } from 'next/server';
export async function POST(request) {
    try {
        const { accessToken, refreshToken, expires, userId, name } = await request.json();
        if (!accessToken || !refreshToken || !expires || !userId || !name) {
            return new Response(
                JSON.stringify({ error: "Missing parameters!" }),
                { status: 400, headers: { "Content-Type": "application/json" } }
            );
        }
        //update code to here
        const data = "oke";
        return NextResponse.json(data);
    } catch (error) {
        return NextResponse.error();
    }
}
