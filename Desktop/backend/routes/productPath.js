import express from "express";
import { createProduct, getAllProduct, getAllProductById, updateProductById, deleteProductById, uploadMiddleware } from "../controllers/productController.js";

const router = express.Router();

router.post("/createProduct", uploadMiddleware, createProduct);
router.get("/getAllProduct",uploadMiddleware, getAllProduct);
router.get("/getAllProductById/:id",uploadMiddleware, getAllProductById);
router.put("/updateProductById/:id",uploadMiddleware,  updateProductById);
router.delete("/deleteProductById/:id",uploadMiddleware,  deleteProductById);

export default router;