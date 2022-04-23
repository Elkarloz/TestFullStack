"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Logout = exports.Index = exports.Login = exports.Register = void 0;
const user_1 = __importDefault(require("../models/user"));
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const Register = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { userEmail, userPassword, userRol } = req.body;
    const usu = yield user_1.default.findOne({ userEmail });
    if (!userEmail || !userPassword) {
        // if userEmail or userPassword is empty
        res.status(404).json({ message: " Email or password is missing" });
    }
    else if (usu !== null) {
        res.status(510).json({ message: "Email already exists" });
    }
    else {
        // if userEmail or userPassword is not empty
        const user = new user_1.default({ userEmail, userPassword, userRol });
        yield user.save();
        const token = jsonwebtoken_1.default.sign({ user }, process.env.SECRET || "", {
            expiresIn: 60 * 60 * 24,
        });
        res
            .setHeader("Authorization", "Bearer " + token)
            .json({ auth: true, token: token });
    }
});
exports.Register = Register;
const Login = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { userEmail, userPassword } = req.body;
    const usu = yield user_1.default.findOne({ userEmail });
    if (!usu) {
        res.status(512).json("User does not exist");
    }
    else {
        if (usu.userPassword === userPassword && usu.userEmail === userEmail) {
            const token = jsonwebtoken_1.default.sign({ user: usu }, process.env.SECRET || "", {
                expiresIn: 60 * 60 * 24,
            });
            res
                .setHeader("Authorization", "Bearer " + token)
                .json({ auth: true, token: token });
        }
        else {
            res.status(511).json("Email or password is incorrect");
        }
    }
});
exports.Login = Login;
const Index = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    console.log(req.headers["Authorization"]);
    /* if (req.header("Authorization")) {
      // if there is a token
      const user = await User.findById(req.userId);
      if (!user) {
        // if the user is not found in the database
        res.status(404).json("User not found");
      } else {
        // if the user is found in the database
        res.json(user);
      }
    } else {
      // if there is no token
      res.status(401).json("Unauthorized");
    } */
});
exports.Index = Index;
const Logout = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    res.send("Logout");
});
exports.Logout = Logout;
