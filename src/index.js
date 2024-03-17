// require("dotenv").config({ path: "./env" });
import mongoose from "mongoose";
import { DB_NAME } from "./constants.js";
// import express from "express";
import connectDB from "./db/index.js";
import dotenv from "dotenv";
import { app } from "./app.js";

dotenv.config({
  path: "./env",
});

connectDB()
  .then(() => {
    app.listen(process.env.PORT || 8000, () => {
      console.log(`server is running at port:${process.env.PORT}`);
    });
  })
  .catch((err) => {
    console.log("Mongo db connection failed!!!", err);
  });

// const app = express()(async () => {
//   try {
//     await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`);
//     app.on("err", (err) => {
//       console.log("Error", err);
//       throw err;
//     });

//     app.listen(process.env.PORT, () => {
//       console.log(`App is running on port ${process.env.PORT}`);
//     });
//   } catch (err) {
//     console.log("ERROR", err);
//     throw err;
//   }
// })();
