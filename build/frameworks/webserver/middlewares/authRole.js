"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const CustomError_1 = require("../../../utils/CustomError");
function authRole() {
    return (req, res, next) => {
        if (!req.isAuthenticated()) {
            return next(new CustomError_1.CustomError("You are not logged in", 400));
        }
        next();
    };
}
exports.default = authRole;
