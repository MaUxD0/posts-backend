interface Post {
  id: number;
  imageUrl: string;
  title: string;
  content: string;
}

let posts: Post[] = [];

export const getPosts = () => posts;

export const createPost = (
  imageUrl: string,
  title: string,
  content: string
): Post => {
  const newPost: Post = {
    id: Date.now(),
    imageUrl,
    title,
    content,
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