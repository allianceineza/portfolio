import express from 'express';
import mongoose from 'mongoose';
import mainRouter from './routes/indexRouting.js'
import dotenv from "dotenv"
import bodyParser from 'body-parser';
dotenv.config();
const db_user=process.env.DB_USER;
const db_port=process.env.PORT||3000
const db_pass=process.env.DB_PASS;
const db_name=process.env.DB_NAME;

const app=express();
app.use(bodyParser.json());

app.use("/",mainRouter);

const dbUri = `mongodb+srv://${db_user}:${db_pass}@cluster0.0hhji.mongodb.net/${db_name}?retryWrites=true&w=majority&appName=Cluster0`;
mongoose.set("strictQuery", false);
mongoose
  .connect(dbUri)
  .then(() => {
    console.log("Connected to MongoDB");
    app.listen(db_port, () => {
      console.log(`Node API is running on port http://localhost:${db_port}`);
     
    });
  })
  .catch((error) => {
    console.log(error);
  });

