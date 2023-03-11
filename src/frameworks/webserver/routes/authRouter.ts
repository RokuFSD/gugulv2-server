import { Router } from "express";
import authController from "../../../adapters/controllers/authController";
import authRole from "../middlewares/authRole";

export default (function authRouter() {
  const router = Router();
  const controller = authController();
  router.get("/me", authRole(), controller.me);
  router.post("/logout", authRole(), controller.logout);
  router.post("/login", controller.login);
  return router;
})();
