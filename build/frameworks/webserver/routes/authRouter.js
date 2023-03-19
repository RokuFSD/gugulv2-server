"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const authController_1 = __importDefault(require("../../../adapters/controllers/authController"));
const authRole_1 = __importDefault(require("../middlewares/authRole"));
const passport_1 = __importDefault(require("passport"));
exports.default = (function authRouter() {
    const router = (0, express_1.Router)();
    const controller = (0, authController_1.default)();
    router.get("/me", (0, authRole_1.default)(), controller.me);
    router.post("/logout", (0, authRole_1.default)(), controller.logout);
    router.post("/login", controller.login);
    router.get("/google", passport_1.default.authenticate("google", { session: true }));
    router.get("/google/callback", passport_1.default.authenticate("google", {
        failureRedirect: "https://gugul-searchv2.onrender.com/login",
        successRedirect: "https://gugul-searchv2.onrender.com",
    }));
    return router;
})();
