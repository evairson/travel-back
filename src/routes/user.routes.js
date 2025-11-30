// src/routes/user.routes.js
import express from "express";
import * as userController from "../controllers/user.controller.js";

const router = express.Router();

// GET /api/users → liste tous les utilisateurs
router.get("/", userController.getAllUsers);

// POST /api/users → créer un nouvel utilisateur
router.post("/", (req, res) => {
  // Logique pour créer un nouvel utilisateur
});

// GET /api/users/id/:id → récupérer un utilisateur par ID
router.get("/id/:id", userController.getUserById);

// GET /api/users/email/:email → récupérer un utilisateur par email
router.get("/email/:email", userController.getUserByEmail);

// PUT /api/users/:id → mettre à jour un utilisateur
router.put("/:id", (req, res) => {
  // Logique pour mettre à jour un utilisateur
});

export default router;