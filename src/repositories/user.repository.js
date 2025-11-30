import pool from "../config/database.js";

export async function findAll() {
  const result = await pool.query("SELECT id, email, created_at FROM users");
  return result.rows;
}

export async function findByEmail(email) {
    const result = await pool.query("SELECT id, email, created_at FROM users WHERE email = $1", [email]);
    return result.rows[0];
}

export async function findById(id) {
  const result = await pool.query("SELECT id, pseudo, url_avatar FROM users WHERE id = $1", [id]);
  return result.rows[0];
}

export async function create(email, passwordHash) {
  const result = await pool.query(
    "INSERT INTO users (email, password_hash) VALUES ($1, $2) RETURNING id, email, created_at",
    [email, passwordHash]
  );
  return result.rows[0];
}
