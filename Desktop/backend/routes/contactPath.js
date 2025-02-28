import { createContact, getAllContact, getContactById, deleteContactById, updateContactById} from "../controllers/contactController.js";
import express from "express";
import { Admin } from "../middlewares/roleIdentification.js";
import {auth} from "../middlewares/tokenVerfication.js";

const contactRouter=express();
contactRouter.post("/createContact",createContact);
contactRouter.get("/getAllContact",auth,Admin,getAllContact);
contactRouter.get("/getContactById/:id",getContactById);
contactRouter.delete("/deleteContactById/:id",deleteContactById);
contactRouter.put("/updateContactById/:id",updateContactById);
export default  contactRouter;