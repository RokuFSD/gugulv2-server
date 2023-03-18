"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const passport_1 = __importDefault(require("passport"));
function authController() {
    async function login(req, res, next) {
        // Passport session login
        passport_1.default.authenticate("local", function cb(err, user, info) {
            if (err)
                return next(err);
            if (!user)
                return next(info);
            req.logIn(user, (err) => {
                if (err)
                    return next(err);
                return res.status(200).json({ user });
            });
        })(req, res, next);
    }
    async function me(req, res) {
        // Get user from passport session
        const user = req.user;
        res.status(200).json({ user });
    }
    async function logout(req, res, next) {
        //Passport session logout
        req.logout((err) => {
            if (err) {
                return next(err);
            }
        });
        res.status(200).json({ message: "Logout success" });
    }
    return {
        login,
        logout,
        me,
    };
}
exports.default = authController;
