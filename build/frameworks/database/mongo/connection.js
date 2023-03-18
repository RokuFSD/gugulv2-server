"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const config_1 = __importDefault(require("../../../config/config"));
function mongoDbConnection() {
    function connectToMongo() {
        mongoose_1.default.set("strictQuery", false);
        mongoose_1.default.connect(config_1.default.mongoURI).catch((err) => {
            throw err;
        });
    }
    mongoose_1.default.connection.on("connected", () => {
        console.info("MongoDB connected");
    });
    mongoose_1.default.connection.on("error", (err) => {
        console.error(err);
        void mongoose_1.default.disconnect();
    });
    mongoose_1.default.connection.on("disconnected", () => {
        console.info("MongoDB disconnected - trying to reconnect");
        setTimeout(connectToMongo, 5000);
    });
    mongoose_1.default.connection.on("reconnected", () => {
        console.info("MongoDB reconnected");
    });
    return {
        connectToMongo,
    };
}
exports.default = mongoDbConnection;
