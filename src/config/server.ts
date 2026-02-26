import express from "express";
import cors from "cors";
import postRouter from "../features/posts/post.router";

const app = express();

app.use(cors());
app.use(express.json());

app.use("/posts", postRouter);

export default app;