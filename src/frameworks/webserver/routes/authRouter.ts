import { Router } from "express";
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
    passport.authenticate("google", {
      successRedirect: "https://rad-tanuki-d2b7f1.netlify.app/",
      failureRedirect: "https://rad-tanuki-d2b7f1.netlify.app/login",
    })
  );
  return router;
})();
