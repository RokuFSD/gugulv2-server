"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const morgan_1 = __importDefault(require("morgan"));
const corsOptions_1 = __importDefault(require("../../config/corsOptions"));
const cookie_parser_1 = __importDefault(require("cookie-parser"));
const cors_1 = __importDefault(require("cors"));
function expressConfig(app) {
    /* Cors */
    app.use((0, cors_1.default)(corsOptions_1.default));
    app.use((0, cookie_parser_1.default)());
    /* Parser */
    app.use(express_1.default.json(), express_1.default.urlencoded({ extended: false }));
    app.use((0, morgan_1.default)("dev"));
}
exports.default = expressConfig;
