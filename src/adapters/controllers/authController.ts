import { Request, Response, NextFunction } from "express";
import passport from "passport";
import User from "../../entities/user";
import { CustomError } from "../../utils/CustomError";

export default function authController() {
  async function login(req: Request, res: Response, next: NextFunction) {
    // Passport session login
    passport.authenticate(
      "local",
      function cb(err: null | Error, user: User | false, info: CustomError) {
        if (err) return next(err);
        if (!user) return next(info);
        req.logIn(user, (err) => {
          if (err) return next(err);
          return res.status(200).json({ user });
        });
      }
    )(req, res, next);
  }

  async function me(req: Request, res: Response) {
    // Get user from passport session
    const user = req.user;
    res.status(200).json({ user });
  }

  async function logout(req: Request, res: Response, next: NextFunction) {
    //Passport session logout
    req.logout((err) => {
      if (err) {
        return next(err);
      }
    });
    res.status(200).json({ message: "Logout success" });
  }

  return {
    login,
    logout,
    me,
  };
}
