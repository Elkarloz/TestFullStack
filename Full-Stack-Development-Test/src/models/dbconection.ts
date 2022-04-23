import mongoose, { ConnectOptions } from "mongoose";

mongoose
  .connect("mongodb://localhost:27017/Full-Stack-Development-Test", {
    useNewUrlParser: true,
  } as ConnectOptions)
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((err) => {
    console.log("Error connecting to MongoDB:", err.message);
  });
