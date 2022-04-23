import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";

interface IPayload {
  user: {
    _id: string;
    iat: number;
  };
}

export const validateToken = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const token = req.headers.authorization; // get the token from the header

  if (!token) {
    //validateToken is a middleware, so if there is no token, it will return 401
    res.status(403).json("Access denied");
  } else {
    //if there is a token, it will check if it is valid
    try {
      const payload = jwt.verify(token, process.env.SECRET || "") as IPayload;
      req.userId = payload.user._id;
      next();
    } catch (err) {
      //if the token is not valid, it will return 401
      res.status(403).json("Invalid token");
    }
  }
};
