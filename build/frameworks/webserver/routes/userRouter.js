"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const userController_1 = __importDefault(require("../../../adapters/controllers/userController"));
const userRepository_1 = __importDefault(require("../../../application/repositories/userRepository"));
const authService_1 = __importDefault(require("../../../application/services/authService"));
const userRepositoryMongo_1 = __importDefault(require("../../database/mongo/repositories/userRepositoryMongo"));
const authService_2 = __importDefault(require("../../services/authService"));
const authRole_1 = __importDefault(require("../middlewares/authRole"));
exports.default = (function userRouter() {
    const router = (0, express_1.Router)();
    const controller = (0, userController_1.default)(userRepository_1.default, new userRepositoryMongo_1.default(), authService_1.default, new authService_2.default());
    router.get("/", (0, authRole_1.default)(), controller.getAll);
    router.put("/", (0, authRole_1.default)(), controller.updateUser);
    router.post("/register", controller.createUser);
    return router;
})();
