"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const userRouter_1 = __importDefault(require("./userRouter"));
const authRouter_1 = __importDefault(require("./authRouter"));
const checkRouter_1 = __importDefault(require("./checkRouter"));
const searchRouter_1 = __importDefault(require("./searchRouter"));
const favoritesRouter_1 = __importDefault(require("./favoritesRouter"));
function routes(app) {
    console.log("Routes");
    app.use("/", searchRouter_1.default);
    app.use("/health", checkRouter_1.default);
    app.use("/users", userRouter_1.default);
    app.use("/auth", authRouter_1.default);
    app.use("/favorites", favoritesRouter_1.default);
}
exports.default = routes;
