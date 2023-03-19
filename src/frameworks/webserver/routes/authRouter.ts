import { NextFunction, Request, Response, Router } from "express";
import authController from "../../../adapters/controllers/authController";
import authRole from "../middlewares/authRole";
import passport from "passport";

export default (function authRouter() {
  const router = Router();
  const controller = authController();
  router.get("/me", authRole(), controller.me);
  router.post("/logout", authRole(), controller.logout);
  router.post("/login", controller.login);
  router.get("/google", passport.authenticate("google", { session: true }));
  router.get(
    "/google/callback",
    passport.authenticate(
      "google",
      {
        failureRedirect: "https://rad-tanuki-d2b7f1.netlify.app/login",
      },
      (req: Request, res: Response, next: NextFunction) => {
        console.log(req);
        req.logIn(req.user!, function (err) {
          if (err) {
            return next(err);
          }
          return res.redirect("https://rad-tanuki-d2b7f1.netlify.app");
        });
      }
    )
  );
  return router;
})();
