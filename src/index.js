// src/index.js
   
import express, { json } from "express";
import pool from "./config/database.js"; // Connexion Postgres
import userRoutes from "./routes/user.routes.js"; 
import postRoutes from "./routes/post.routes.js";
import "dotenv/config";

const app = express();

// Middleware pour parser le JSON dans les requêtes
app.use(json());

// Routes API
app.use("/api/users", userRoutes);
app.use("/api/posts", postRoutes);

// Route test (health check)
app.get("/api/health", async (req, res) => {
  try {
    const result = await query("SELECT NOW()"); // ping DB
    res.json({ status: "ok", time: result.rows[0].now });
  } catch (err) {
    res.status(500).json({ status: "error", message: err.message });
  }
});

// Démarrer le serveur
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`🚀 Serveur lancé sur http://localhost:${PORT}`);
});
