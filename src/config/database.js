// src/config/database.js
import { Pool } from "pg";

// postgres://username:password@localhost:5432/mydatabase
const connectionString = process.env.DATABASE_URL;

if (!connectionString) {
  throw new Error("❌ DATABASE_URL not defined in .env");
}

// Creation of a connection pool
const pool = new Pool({
  connectionString,
  ssl: process.env.NODE_ENV === "production"
    ? { rejectUnauthorized: false }
    : false,
});

// Test the connection
pool.connect()
  .then(client => {
    console.log("✅ Connected to PostgreSQL");
    client.release();
  })
  .catch(err => console.error("❌ Error connecting to PostgreSQL", err.stack));

export default pool;
