"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const authService_1 = __importDefault(require("../../../application/services/authService"));
const userController_1 = __importDefault(require("../../../adapters/controllers/userController"));
const userRepository_1 = __importDefault(require("../../../application/repositories/userRepository"));
const authService_2 = __importDefault(require("../../services/authService"));
const userRepositoryMongo_1 = __importDefault(require("../../database/mongo/repositories/userRepositoryMongo"));
const express_1 = require("express");
exports.default = (function favoritesRouter() {
    const router = (0, express_1.Router)();
    const controller = (0, userController_1.default)(userRepository_1.default, new userRepositoryMongo_1.default(), authService_1.default, new authService_2.default());
    router.post("/", controller.addFav);
    router.delete("/:favoriteId", controller.deleteFav);
    return router;
})();
