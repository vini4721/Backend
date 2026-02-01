import dotenv from "dotenv";
import connectDB from "./db/connectionDB.js";

dotenv.config({
  path: "./.env",
});

connectDB();
