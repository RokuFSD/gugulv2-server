import AuthService from "../../../application/services/authService";
import userController from "../../../adapters/controllers/userController";
import UserRepository from "../../../application/repositories/userRepository";
import AuthServiceLocal from "../../services/authService";
import UserRepositoryMongo from "../../database/mongo/repositories/userRepositoryMongo";

import { Router } from "express";

export default (function favoritesRouter() {
  const router = Router();
  const controller = userController(
    UserRepository,
    new UserRepositoryMongo(),
    AuthService,
    new AuthServiceLocal()
  );
  router.post("/", controller.addFav);
  router.delete("/:favoriteId", controller.deleteFav);
  return router;
})();
