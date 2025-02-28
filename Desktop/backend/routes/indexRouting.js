import express from "express";
import productRouter from "./productPath.js";
import contactRouter from "./contactPath.js";
import blogRouter from './blogPath.js';
import userRouter from "./userPath.js"

const mainRouter=express.Router();
mainRouter.use("/contact",contactRouter)
mainRouter.use("/product",productRouter)
mainRouter.use("/blog",blogRouter)
mainRouter.use("/user",userRouter)
export default mainRouter;