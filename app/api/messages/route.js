import { getServerSession } from "next-auth/next";
import { authOptions } from "../auth/[...nextauth]/route";

export async function GET(request) {
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
        const { sessionId } = await request.json();
        if (!sessionId) {
            return new Response(
                JSON.stringify({ error: "Missing parameters: sessionId are required" }),
                { status: 400, headers: { "Content-Type": "application/json" } }
            );
        }
        const res = await fetch(
            `${process.env.NEXT_PUBLIC_API}/${process.env.NEXT_PUBLIC_AGENTID}/messages?roomId=default-room-${process.env.NEXT_PUBLIC_AGENTID}-${sessionId}`,
            {
                method: "GET",
                headers: { "Content-Type": "application/json" }
            }
        );
        const data = await res.json();
        return new Response(
            JSON.stringify({ message: "Session is valid", user: session.user, data }),
            {
                status: 200,
                headers: { "Content-Type": "application/json" },
            }
        );
    } catch (error) {
        return new Response(
            JSON.stringify({ error: "Internal Server Error" }),
            {
                status: 500,
                headers: { "Content-Type": "application/json" },
            }
        );
    }
}
