import { NextResponse } from "next/server";
import { getServerSession } from "next-auth/next";
import { authOptions } from "../auth/[...nextauth]/authOptions";
import getConfig from "next/config";

export async function GET(req) {
    const { searchParams } = new URL(req.url);
    const publicKey = searchParams.get("publicKey");
    const session = await getServerSession(authOptions);
    const { serverRuntimeConfig } = getConfig();

    if (!session) {
        return new Response(
            JSON.stringify({ error: "Unauthorized: Session is not valid" }),
            {
                status: 401,
                headers: { "Content-Type": "application/json" },
            }
        );
    }
    try {
        const res = await fetch(
            `${serverRuntimeConfig.NEXT_PUBLIC_API}/${serverRuntimeConfig.NEXT_PUBLIC_AGENTID}/messages?roomId=default-room-${serverRuntimeConfig.NEXT_PUBLIC_AGENTID}-${publicKey}&count=30`,
            {
                method: "GET",
                headers: { "Content-Type": "application/json" },
                cache: "no-cache",
            }
        );
        if (!res.ok) {
            throw new Error("Network response was not ok");
        }
        const data = await res.json();

        return NextResponse.json({ data: data });
    } catch (error) {
        return NextResponse.error();
    }
}
