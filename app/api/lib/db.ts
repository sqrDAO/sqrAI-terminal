import getConfig from "next/config";
import { Pool } from "pg";

let pool: Pool;
if (!global._pgPool) {
  const {serverRuntimeConfig} = getConfig();
  global._pgPool = new Pool({
    connectionString: serverRuntimeConfig.POSTGRES_URL,
  });
}

pool = global._pgPool;

export default pool;