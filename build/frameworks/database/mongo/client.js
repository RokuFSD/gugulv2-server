"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_session_1 = __importDefault(require("express-session"));
const connect_mongo_1 = __importDefault(require("connect-mongo"));
async function mongoStoreConnection(app, config) {
    const mongoStore = new connect_mongo_1.default({
        mongoUrl: config.mongoURI,
        collectionName: "sessions",
    });
    function startSession() {
        app.set("trust proxy", 1);
        app.use((0, express_session_1.default)({
            store: mongoStore,
            secret: config.redisSecret,
            resave: false,
            saveUninitialized: false,
            cookie: {
                maxAge: 1000 * 60 * 60 * 24 * 7,
                httpOnly: true,
                sameSite: "none",
                secure: "auto",
            },
        }));
    }
    return {
        startSession,
    };
}
exports.default = mongoStoreConnection;
