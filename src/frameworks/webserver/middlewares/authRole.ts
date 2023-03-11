import { Request, Response, NextFunction } from "express";
import { CustomError } from "../../../utils/CustomError";

export default function authRole() {
  return (req: Request, res: Response, next: NextFunction) => {
    if (!req.isAuthenticated()) {
      return next(new CustomError("You are not logged in", 400));
    }
    next();
  };
}
