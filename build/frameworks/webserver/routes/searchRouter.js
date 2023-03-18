"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const searchController_1 = __importDefault(require("../../../adapters/controllers/searchController"));
const searchRepository_1 = __importDefault(require("../../../application/repositories/searchRepository"));
const locationRepository_1 = __importDefault(require("../../../application/repositories/locationRepository"));
const serpapi_1 = require("../../services/serpapi");
const ipapi_1 = require("../../services/ipapi");
exports.default = (function searchRouter() {
    const router = (0, express_1.Router)();
    const controller = (0, searchController_1.default)(searchRepository_1.default, new serpapi_1.SerpApiService(), locationRepository_1.default, new ipapi_1.IpApiService());
    router.get("/", controller.triggerSearch);
    return router;
})();
