"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv_1 = __importDefault(require("dotenv"));
const envFound = dotenv_1.default.config();
if (!envFound) {
    throw new Error("Couldn't find .env files");
}
if (!process.env.PORT) {
    throw new Error("PORT is not defined");
}
exports.default = {
    port: parseInt(process.env.PORT, 10),
    serpKey: process.env.SERP_KEY,
    mongoURI: process.env.MONGO_URI,
    redisSecret: process.env.REDIS_SECRET,
    googleId: process.env.GOOGLE_CLIENT_ID,
    googleSecret: process.env.GOOGLE_CLIENT_SECRET,
};
