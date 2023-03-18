"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function errorHandlingMiddleware(err, req, res, next) {
    err.statusCode = err.statusCode || 404;
    err.message = err.message || "Not Found";
    return res.status(err.statusCode).json({
        message: err.message,
        type: err.type,
    });
}
exports.default = errorHandlingMiddleware;
