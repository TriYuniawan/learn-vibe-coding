import { drizzle } from "drizzle-orm/mysql2";
import mysql from "mysql2/promise";
import "dotenv/config";

// Gunakan connection pool untuk koneksi yang stabil
const poolConnection = mysql.createPool({
  uri: process.env.DB_URL,
});

export const db = drizzle(poolConnection);
