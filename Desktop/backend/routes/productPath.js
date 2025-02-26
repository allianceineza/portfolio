import express from "express";
import { createProduct, uploadMiddleware } from "../controllers/productController.js";

const router = express.Router();

router.post("/createProduct", uploadMiddleware, createProduct);

export default router;