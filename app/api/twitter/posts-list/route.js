import { NextRequest, NextResponse } from "next/server";
import pool from "../lib/db";
import { v4 } from "uuid";
import getConfig from "next/config";

const { serverRuntimeConfig } = getConfig();

export async function GET(request) {
  try {
    const client = await pool.connect();
    const { searchParams } = new URL(request.url);
    const walletAddress = searchParams.get("publicKey");
    const agentId = searchParams.get("agentId");

    const queryTwitterUsers =
      'SELECT * FROM twitter_client WHERE "walletAddress" = $1 AND "agentId" = $2';
    const values = [walletAddress, agentId];
    const twitterClients = await client.query(queryTwitterUsers, values);
    if (result.rows.length === 0) {
      return NextResponse.json([]);
    } else {
      const queryMemories =
        'SELECT * FROM memories WHERE "agentId" = $1 and "type" = $2';
      const values = [agentId, "messages"];
      const memories = await client.query(queryMemories, values);
      const result = [];
      const twitterIds = twitterClients.rows.map((client) => client.twitterId);
      for (let i = 0; i < memories.rows.length; i++) {
        const memory = memories.rows[i];
        const content = JSON.parse(memory.content);
        if (twitterIds.includes(content.twitterId)) {
          result.push(content);
        }
      }
      return NextResponse.json(result);
    }
  } catch (error) {
    console.log(`error: ${error}`);
    return NextResponse.error();
  } finally {
    client.release();
  }
}
