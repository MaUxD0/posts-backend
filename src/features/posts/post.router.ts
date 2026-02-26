import { Router } from "express";
import {
  getAllPosts,
  createNewPost,
  deletePostById,
} from "./post.controller";

const router = Router();

router.get("/", getAllPosts);
router.post("/", createNewPost);
router.delete("/:id", deletePostById);

export default router;