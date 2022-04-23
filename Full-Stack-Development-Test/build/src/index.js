"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
require("./models/dbconection");
const dotenv_1 = __importDefault(require("dotenv"));
const cors_1 = __importDefault(require("cors"));
//importing route
const authSesion_1 = __importDefault(require("./routers/authSesion"));
const product_1 = __importDefault(require("./routers/product"));
//initialize express
const app = (0, express_1.default)();
//settings
dotenv_1.default.config();
app.set("port", process.env.PORT || 3001);
//middlewares
app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});
app.use(express_1.default.json());
app.use((0, cors_1.default)());
//routes
app.use("/api/authSesion", authSesion_1.default);
app.use("/api/product", product_1.default);
//start server
app.listen(app.get("port"), () => {
    console.log("Server on port", app.get("port"));
});
