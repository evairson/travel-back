
// src/controllers/post.controller.js
import {findAll, findById} from "../repositories/post.repository.js";

/**
 * GET /api/posts
 */
export async function getAllPosts(req, res) {
  try {
    const posts = await findAll();
    res.json(posts);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
}

/**
 * GET /api/posts/:id
 */
export async function getPostById(req, res) {
  try {
    const post = await findById(req.params.id);
    if (!post) return res.status(404).json({ error: "Post non trouvé" });
    res.json(post);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
}
