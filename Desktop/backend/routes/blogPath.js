import express from "express";
import { createBlog, uploadMiddleware } from "../controllers/blogController.js";

const router = express.Router();

router.post("/createBlog", uploadMiddleware, createBlog);

export default router;