import getConfig from "next/config";
import { Client } from "pg";

export async function connectToDatabase() {
  const {serverRuntimeConfig} = getConfig();
  const client = new Client({
    connectionString: process.env.POSTGRES_URL,
  });

  await client.connect();
  return client;
}
