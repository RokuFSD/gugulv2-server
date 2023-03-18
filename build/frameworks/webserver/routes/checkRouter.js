"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
exports.default = (function checkRouter() {
    const router = (0, express_1.Router)();
    router.get("/", (req, res) => {
        res.send("Hello World");
    });
    return router;
})();