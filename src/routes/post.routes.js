// src/routes/user.routes.js
import express from "express";
import {getAllPosts, getPostById} from "../controllers/post.controller.js";

const router = express.Router();

// GET /api/posts → liste tous les posts
router.get("/", getAllPosts);

// GET /api/posts/:id → récupérer un post par ID
router.get("/:id", getPostById);


export default router;