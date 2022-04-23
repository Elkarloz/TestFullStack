import { Request, Response } from "express";
import User, { IUser } from "../models/user";
import jwt from "jsonwebtoken";

export const Register = async (req: Request, res: Response) => {
  const { userEmail, userPassword, userRol } = req.body;

  const usu = await User.findOne({ userEmail });

  if (!userEmail || !userPassword) {
    // if userEmail or userPassword is empty
    res.status(404).json({ message: " Email or password is missing" });
  } else if (usu !== null) {
    res.status(510).json({ message: "Email already exists" });
  } else {
    // if userEmail or userPassword is not empty
    const user: IUser = new User({ userEmail, userPassword, userRol });
    await user.save();

    const token = jwt.sign({ user }, process.env.SECRET || "", {
      expiresIn: 60 * 60 * 24,
    });

    res
      .setHeader("Authorization", "Bearer " + token)
      .json({ auth: true, token: token });
  }
};

export const Login = async (req: Request, res: Response) => {
  const { userEmail, userPassword } = req.body;
  const usu = await User.findOne({ userEmail });
  if (!usu) {
    res.status(512).json("User does not exist");
  } else {
    if (usu.userPassword === userPassword && usu.userEmail === userEmail) {
      const token = jwt.sign({ user: usu }, process.env.SECRET || "", {
        expiresIn: 60 * 60 * 24,
      });

      res
        .setHeader("Authorization", "Bearer " + token)
        .json({ auth: true, token: token });
    } else {
      res.status(511).json("Email or password is incorrect");
    }
  }
};

export const Index = async (req: Request, res: Response) => {
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
};

export const Logout = async (req: Request, res: Response) => {
  res.send("Logout");
};
