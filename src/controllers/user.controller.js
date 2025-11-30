// src/controllers/user.controller.js
import {findByEmail, findAll, findById} from "../repositories/user.repository.js";

/**
 * GET /api/users
 */
export async function getAllUsers(req, res) {
  try {
    const users = await findAll();
    res.json(users);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
}

/**
 * GET /api/users/:email
 */
export async function getUserByEmail(req, res) {
  try {
    const user = await findByEmail(req.params.email);
    if (!user) return res.status(404).json({ error: "Utilisateur non trouvé" });
    res.json(user);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
}

export async function getUserById(req, res) {
  try {
    const user = await findById(req.params.id);
    if (!user) return res.status(404).json({ error: "Utilisateur non trouvé" });
    res.json(user);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
}

/**
 * POST /api/users
 */
export async function createUser(req, res) {
  try {
    const { email, password } = req.body;
    if (!email || !password) {
      return res.status(400).json({ error: "Email et mot de passe requis" });
    }

    // ⚠️ Ici on devrait hasher le mot de passe avant d’insérer
    const newUser = await userRepository.create(email, password);
    res.status(201).json(newUser);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
}

/**
 * PUT /api/users/:id
 */
export async function updateUser(req, res) {
  try {
    const updatedUser = await userRepository.update(req.params.id, req.body);
    if (!updatedUser) return res.status(404).json({ error: "Utilisateur non trouvé" });
    res.json(updatedUser);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
}