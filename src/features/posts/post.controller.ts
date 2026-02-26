import { Request, Response } from "express";
import { getPosts, createPost, deletePost } from "./post.service";

export const getAllPosts = (req: Request, res: Response) => {
  res.json(getPosts());
};

export const createNewPost = (req: Request, res: Response) => {
  const { imageUrl, title, description } = req.body;

  if (!imageUrl || !title || !description) {
    return res.status(400).json({
      error: "imageUrl, title and description are required",
    });
  }

  const newPost = createPost(imageUrl, title, description);
  res.status(201).json(newPost);
};

export const deletePostById = (
  req: Request<{ id: string }>,
  res: Response
) => {
  const id = parseInt(req.params.id);

  const deleted = deletePost(id);

  if (!deleted) {
    return res.status(404).json({ error: "Post not found" });
  }

  res.json({ message: "Post deleted successfully" });
};