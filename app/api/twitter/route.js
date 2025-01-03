import { NextRequest, NextResponse } from "next/server";
import pool from "../lib/db";
import { v4 } from "uuid";
import getConfig from "next/config";

const { serverRuntimeConfig } = getConfig();

export async function POST(request) {
  try {
    const agentId = process.env.AGENTID;
    const body = await request.json();
    console.log(`data: ${JSON.stringify(body)}`);

    const {
      accessToken,
      refreshToken,
      expiredAt,
      userId,
      name,
      walletAddress,
      imageUrl,
    } = body;
    if (
      !accessToken ||
      !refreshToken ||
      !expiredAt ||
      !userId ||
      !name ||
      !imageUrl
    ) {
      return new Response(JSON.stringify({ error: "Missing parameters!" }), {
        status: 400,
        headers: { "Content-Type": "application/json" },
      });
    }

    const client = await pool.connect();
    const query =
      'SELECT * FROM twitter_client WHERE "agentId" = $1 AND "twitterId"= $2';
    const result = await client.query(query, [agentId, userId]);

    if (result.rows.length > 0) {
      const queryUpdate =
        'UPDATE twitter_client SET "accessToken" = $1, "refreshToken" = $2, "expiredAt" = $3 WHERE "agentId" = $4 AND "twitterId"= $5 RETURNING *';
      const values = [accessToken, refreshToken, expiredAt, agentId, userId];
      const result = await client.query(queryUpdate, values);
      console.log(`result: ${JSON.stringify(result)}`);
      client.release();
      return NextResponse.json(result.rows);
    } else {
      const queryInsert =
        'INSERT INTO twitter_client (id, "agentId", "twitterId", "twitterName", "accessToken", "refreshToken", "expiredAt", "walletAddress") VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9) RETURNING *';
      const values = [
        v4(),
        agentId,
        userId,
        name,
        accessToken,
        refreshToken,
        expiredAt,
        walletAddress,
        imageUrl,
      ];
      const result = await client.query(queryInsert, values);
      console.log(`result: ${JSON.stringify(result)}`);
      client.release();
      return NextResponse.json(result);
    }
  } catch (error) {
    console.log(`error: ${error}`);
    client.release();
    return NextResponse.error();
  }
}

export async function GET(request) {
  try {
    const agentId = process.env.AGENTID;
    const { searchParams } = new URL(request.url);
    const walletAddress = searchParams.get("publicKey");

    const client = await pool.connect();
    const query =
      'SELECT * FROM twitter_client WHERE "walletAddress" = $1 AND "agentId" = $2';
    const values = [walletAddress, agentId];
    const result = await client.query(query, values);
    client.release();

    return NextResponse.json(result.rows);
  } catch (error) {
    console.log(`error: ${error}`);
    return NextResponse.error();
  }
}

export async function DELETE(request) {
  try {
    const { id } = request.params;

    const client = await pool.connect();
    const query = "DELETE FROM twitter_client WHERE id = $1";
    const values = [id];
    const result = await client.query(query, values);
    client.release();

    return NextResponse.json(result.rows);
  } catch (error) {
    console.log(`error: ${error}`);
    return NextResponse.error();
  }
}
