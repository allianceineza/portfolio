import express from "express";
import productRouter from "./productPath.js";
import contactRouter from "./contactPath.js";
import blogRouter from './blogPath.js'
const mainRouter=express.Router();
mainRouter.use("/contact",contactRouter)
mainRouter.use("/product",productRouter)
mainRouter.use("/blog",blogRouter)
export default mainRouter;