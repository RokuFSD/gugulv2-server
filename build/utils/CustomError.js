"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CustomError = exports.ErrorType = void 0;
var ErrorType;
(function (ErrorType) {
    ErrorType["FORM"] = "form";
    ErrorType["EMAIL"] = "email";
    ErrorType["USERNAME"] = "username";
    ErrorType["PASSWORD"] = "password";
})(ErrorType = exports.ErrorType || (exports.ErrorType = {}));
class CustomError extends Error {
    type;
    statusCode;
    constructor(message, statusCode, type) {
        super(message);
        this.name = this.constructor.name;
        this.statusCode = statusCode;
        this.type = type;
        Error.captureStackTrace(this, this.constructor);
    }
}
exports.CustomError = CustomError;
