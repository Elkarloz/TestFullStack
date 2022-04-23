"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateToken = void 0;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const validateToken = (req, res, next) => {
    const token = req.headers.authorization; // get the token from the header
    if (!token) {
        //validateToken is a middleware, so if there is no token, it will return 401
        res.status(403).json("Access denied");
    }
    else {
        //if there is a token, it will check if it is valid
        try {
            const payload = jsonwebtoken_1.default.verify(token, process.env.SECRET || "");
            req.userId = payload.user._id;
            next();
        }
        catch (err) {
            //if the token is not valid, it will return 401
            res.status(403).json("Invalid token");
        }
    }
};
exports.validateToken = validateToken;
