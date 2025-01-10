import { NextResponse } from "next/server";
import { getServerSession } from "next-auth/next";
import { authOptions } from "../auth/[...nextauth]/authOptions";

export async function GET(req) {
    const { searchParams } = new URL(req.url);
    const agentId = searchParams.get("agentId");
    const session = await getServerSession(authOptions);

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
            `${process.env.API_URL}/${agentId}/knowledge`,
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
