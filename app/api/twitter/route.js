import { getServerSession } from "next-auth/next";
import { authOptions } from "../auth/[...nextauth]/route";
import { connectToDatabase } from "../../lib/db";
import { v4 } from "uuid";

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
    const { agentId, sessionId } = await request.json();
    if (!agentId || !sessionId) {
      return new Response(
        JSON.stringify({
          error: "Missing parameters: message and sessionId are required",
        }),
        { status: 400, headers: { "Content-Type": "application/json" } }
      );
    }

    console.log(`session: ${JSON.stringify(session)}`);
    const client = await connectToDatabase();

    const query =
      'INSERT INTO twitter_client (id, "agentId", "twitterId", "twitterName", "accessToken", "refreshToken", "expiredAt") VALUES ($1, $2, $3, $4, $5, $6) RETURNING *';
    const values = [
      v4(),
      agentId,
      token.twitterId,
      token.twitterName,
      token.accessToken,
      token.refreshToken,
      token.expires,
    ];
    const result = await client.query(query, values);
    console.log(`result: ${JSON.stringify(result)}`);
  } catch (error) {
    return new Response(JSON.stringify({ error: "Internal Server Error" }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }
}
