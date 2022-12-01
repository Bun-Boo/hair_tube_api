import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";

const app = express();
dotenv.config();

const connect = () =>
  mongoose
    .connect(process.env.MONGO)
    .then(() => {
      console.log("DB connected");
    })
    .catch((err) => {
      throw err;
    });

const PORT = 8800;
app.listen(PORT, () => {
  connect();
  console.log("Server connected");
});
