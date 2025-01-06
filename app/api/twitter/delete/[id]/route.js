import { NextRequest, NextResponse } from "next/server";
import pool from "../../../lib/db";

export async function DELETE(request) {
  if (request.method !== "DELETE") {
    // Respond with a 405 status code for unsupported methods
    return NextResponse.json(
      { message: "Method not allowed" },
      { status: 405 }
    );
  }

  const url = request.url;
  const id = url.split("/").pop(); // Extract the dynamic `id`
  if (!id) {
    // Respond with a 400 status code for missing ID
    return NextResponse.json({ message: "ID is required" }, { status: 400 });
  }

  const client = await pool.connect();
  try {
    const query = "DELETE FROM twitter_client WHERE id = $1";
    const values = [id];
    const result = await client.query(query, values);
    client.release();

    if (result.rowCount === 0) {
      // Respond with a 404 status code if the item was not found
      return NextResponse.json({ message: "Item not found" }, { status: 404 });
    }

    // Respond with a success message
    return NextResponse.json({ message: "Item deleted successfully" });
  } catch (error) {
    console.log(`error: ${error}`);
    return NextResponse.error();
  }
}
