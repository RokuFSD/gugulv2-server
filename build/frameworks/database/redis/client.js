"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_session_1 = __importDefault(require("express-session"));
const connect_redis_1 = __importDefault(require("connect-redis"));
const redis_1 = require("redis");
const process = __importStar(require("process"));
async function redisDbConnection(app, config) {
    const redisClient = (0, redis_1.createClient)({
        url: process.env.REDIS_URL,
    });
    const redisStore = new connect_redis_1.default({
        client: redisClient,
    });
    redisClient.on("error", (err) => {
        console.log("Redis error: ", err.stack);
        process.exit(1);
    });
    redisClient.on("connect", () => {
        console.log("Redis connected");
    });
    redisClient.on("ready", () => {
        console.log("Redis ready");
    });
    await redisClient.connect();
    function startSession() {
        app.use((0, express_session_1.default)({
            store: redisStore,
            secret: config.redisSecret,
            resave: false,
            saveUninitialized: false,
            cookie: {
                maxAge: 1000 * 60 * 60 * 24 * 7,
                httpOnly: true,
                sameSite: "lax",
            },
        }));
    }
    return {
        startSession,
    };
}
exports.default = redisDbConnection;
