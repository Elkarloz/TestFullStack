import express from "express";
import "./models/dbconection";
import dotenv from "dotenv";
import cors from "cors";

//importing route
import AuthSesionRouters from "./routers/authSesion";
import ProductRouters from "./routers/product";

//initialize express
const app = express();

//settings
dotenv.config();

app.set("port", process.env.PORT || 3001);

//middlewares
app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});
app.use(express.json());
app.use(cors());
//routes

app.use("/api/authSesion", AuthSesionRouters);
app.use("/api/product", ProductRouters);

//start server
app.listen(app.get("port"), () => {
  console.log("Server on port", app.get("port"));
});
