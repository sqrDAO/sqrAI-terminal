import { NextRequest, NextResponse } from "next/server";
import { v4 } from "uuid";
import getConfig from "next/config";
import pool from "../../lib/db";

const { serverRuntimeConfig } = getConfig();

export async function GET(request) {
  const client = await pool.connect();
  try {
    const { searchParams } = new URL(request.url);
    const walletAddress = searchParams.get("publicKey");
    const agentId = searchParams.get("agentId");

    const queryTwitterUsers =
      'SELECT * FROM twitter_client WHERE "walletAddress" = $1 AND "agentId" = $2';
    const values = [walletAddress, agentId];
    const twitterClients = await client.query(queryTwitterUsers, values);
    if (twitterClients.rows.length === 0) {
      return NextResponse.json([]);
    } else {
      const queryMemories =
        'SELECT * FROM memories WHERE "agentId" = $1 and "type" = $2';
      const values = [agentId, "messages"];
      const memories = await client.query(queryMemories, values);
      const result = [];
      const twitterInfo = twitterClients.rows.map((client) => {
        return {
          twitterId: client.twitterId,
          twitterName: client.twitterName,
          imageUrl: client.imageUrl,
        };
      });
      for (let i = 0; i < memories.rows.length; i++) {
        const memory = memories.rows[i];
        const source = memory.content.source;
        if (source === "twitter") {
          const twitterId = memory.content.twitterId;
          const twitter = twitterInfo.find(
            (info) => info.twitterId === twitterId
          );
          if (twitter) {
            result.push({
              ...memory.content,
              twitterName: twitter.twitterName,
              imageUrl: twitter.imageUrl,
            });
          }
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
