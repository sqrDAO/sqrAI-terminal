import { Pool } from "pg";

let pool: Pool;
if (!global._pgPool) {
  global._pgPool = new Pool({
    connectionString: process.env.POSTGRES_URL,
  });
}

pool = global._pgPool;

export default pool;