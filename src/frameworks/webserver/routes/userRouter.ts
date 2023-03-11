import { Router } from "express";
import userController from "../../../adapters/controllers/userController";
import UserRepository from "../../../application/repositories/userRepository";
import AuthService from "../../../application/services/authService";
import UserRepositoryMongo from "../../database/mongo/repositories/userRepositoryMongo";
import AuthServiceLocal from "../../services/authService";
import authRole from "../middlewares/authRole";

export default (function userRouter() {
  const router = Router();
  const controller = userController(
    UserRepository,
    new UserRepositoryMongo(),
    AuthService,
    new AuthServiceLocal()
  );
  router.get("/", authRole(), controller.getAll);
  router.put("/", authRole(), controller.updateUser);
  router.post("/register", controller.createUser);
  return router;
})();
