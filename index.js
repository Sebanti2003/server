import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import { configDotenv } from "dotenv";
import { database } from "./database.js";
import { Book } from "./models/bookmodel.js";
import bookrouter from "./routes/bookfield.js";
configDotenv();
//Add a database
database();
const app = express();
//middlewares
app.use(express.json());
app.use(cors());
//routes
app.use("/books", bookrouter);
//App listening
app.listen(process.env.PORT||5000, () => {
  console.log(`server is running on port ${process.env.PORT}`);
});
