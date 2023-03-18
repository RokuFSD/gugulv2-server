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
const express_1 = __importDefault(require("express"));
const config_1 = __importDefault(require("./config/config"));
const http = __importStar(require("http"));
const routes_1 = __importDefault(require("./frameworks/webserver/routes"));
const server_1 = __importDefault(require("./frameworks/webserver/server"));
const express_2 = __importDefault(require("./frameworks/webserver/express"));
const connection_1 = __importDefault(require("./frameworks/database/mongo/connection"));
const client_1 = __importDefault(require("./frameworks/database/redis/client"));
const passport_1 = __importDefault(require("./frameworks/services/passport"));
const authService_1 = __importDefault(require("./frameworks/services/authService"));
const userRepositoryMongo_1 = __importDefault(require("./frameworks/database/mongo/repositories/userRepositoryMongo"));
const errorHandler_1 = __importDefault(require("./frameworks/webserver/middlewares/errorHandler"));
const app = (0, express_1.default)();
const server = http.createServer(app);
(0, express_2.default)(app);
(0, client_1.default)(app, config_1.default).then(({ startSession }) => {
    startSession();
    // Passport configuration
    (0, passport_1.default)(app, new userRepositoryMongo_1.default(), new authService_1.default()).init();
    // Routes
    (0, routes_1.default)(app);
    // Error handling
    app.use(errorHandler_1.default);
});
(0, connection_1.default)().connectToMongo();
(0, server_1.default)(app, config_1.default, server).startServer();
// Expose app
exports.default = app;
