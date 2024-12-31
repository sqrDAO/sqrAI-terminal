import { getServerSession } from "next-auth/next";
import { authOptions } from "../auth/[...nextauth]/authOptions";

export async function POST(request) {
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
        const { message, publicKey } = await request.json();
        if (!message || !publicKey) {
            return new Response(
                JSON.stringify({ error: "Missing parameters: message and sessionId are required" }),
                { status: 400, headers: { "Content-Type": "application/json" } }
            );
        }
        const res = await fetch(
            `${process.env.NEXT_PUBLIC_API}/${process.env.NEXT_PUBLIC_AGENTID}/message`,
            {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    text: message,
                    userId: publicKey || "User",
                    roomId: `default-room-${process.env.NEXT_PUBLIC_AGENTID}-${publicKey}`,
                }),
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
