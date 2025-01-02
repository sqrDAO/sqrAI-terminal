import getConfig from "next/config";
import { Client } from "pg";

export async function connectToDatabase() {
  const client = new Client({
    connectionString: getConfig().serverRuntimeConfig.POSTGRES_URL,
  });

  await client.connect();
  console.log("Connected to database");
  return client;
}
