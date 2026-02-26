import { Post } from "../post.types";

let posts: Post[] = [];
let currentId = 1;

export const getPosts = (): Post[] => {
  return posts;
};

export const createPost = (
  imageUrl: string,
  title: string,
  description: string
): Post => {
  const newPost: Post = {
    id: currentId++,
    imageUrl,
    title,
    description,
  };

  posts.push(newPost);
  return newPost;
};

export const deletePost = (id: number): boolean => {
  const index = posts.findIndex((post) => post.id === id);

  if (index === -1) return false;

  posts.splice(index, 1);
  return true;
};