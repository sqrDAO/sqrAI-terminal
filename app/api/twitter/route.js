import { NextRequest, NextResponse } from "next/server";
import { connectToDatabase } from "../lib/db";
import { v4 } from "uuid";

const client = await connectToDatabase();

export async function POST(request) {
  try {
    const agentId = process.env.NEXT_PUBLIC_AGENTID;
    const data = await request.json();
    console.log(`data: ${JSON.stringify(data)}`);

    const { accessToken, refreshToken, expiredAt, userId, name } = data;
    if (!accessToken || !refreshToken || !expiredAt || !userId || !name) {
      return new Response(JSON.stringify({ error: "Missing parameters!" }), {
        status: 400,
        headers: { "Content-Type": "application/json" },
      });
    }

    const query =
      'SELECT * FROM twitter_client WHERE "agentId" = $1 AND "twitterId"= $2';
    const result = await client.query(query, [agentId, userId]);

    if (result.rows.length > 0) {
      const queryUpdate =
        'UPDATE twitter_client SET "accessToken" = $1, "refreshToken" = $2, "expiredAt" = $3 WHERE "agentId" = $4 AND "twitterId"= $5 RETURNING *';
      const values = [accessToken, refreshToken, expiredAt, agentId, userId];
      const result = await client.query(queryUpdate, values);
      console.log(`result: ${JSON.stringify(result)}`);
      return NextResponse.json(result.rows);
    } else {
      const queryInsert =
        'INSERT INTO twitter_client (id, "agentId", "twitterId", "twitterName", "accessToken", "refreshToken", "expiredAt") VALUES ($1, $2, $3, $4, $5, $6, $7) RETURNING *';
      const values = [
        v4(),
        agentId,
        userId,
        name,
        accessToken,
        refreshToken,
        expiredAt,
      ];
      const result = await client.query(queryInsert, values);
      console.log(`result: ${JSON.stringify(result)}`);
      return NextResponse.json(result);
    }
  } catch (error) {
    console.log(`error: ${error}`);
    return NextResponse.error();
  }
}
