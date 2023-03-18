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
      successRedirect: "http://localhost:5173/",
      failureRedirect: "http://localhost:5173/login",
    })
  );
  return router;
})();
