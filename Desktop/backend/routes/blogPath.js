import express from "express";
import { createBlog, getAllBlog, getAllBlogById, updateBlogById, uploadMiddleware } from "../controllers/blogController.js";

const router = express.Router();

router.post("/createBlog", uploadMiddleware, createBlog);
router.get("/getAllBlog",uploadMiddleware, getAllBlog);
router.get("/getAllBlogById/:id",uploadMiddleware, getAllBlogById);
router.put("/updateBlogById/:id",uploadMiddleware,  updateBlogById);


export default router;