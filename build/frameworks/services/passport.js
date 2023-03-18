"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const passport_1 = __importDefault(require("passport"));
const passport_local_1 = require("passport-local");
const CustomError_1 = require("../../utils/CustomError");
const passport_google_oauth2_1 = require("passport-google-oauth2");
const user_1 = require("../../application/use-cases/user");
const config_1 = __importDefault(require("../../config/config"));
function passportConnection(app, userRepository, authService) {
    passport_1.default.serializeUser((user, done) => {
        done(null, user);
    });
    passport_1.default.deserializeUser(async (user, done) => {
        const { _id } = user;
        if (!_id)
            return done(null, false);
        const userDb = await userRepository.getUserById(_id);
        done(null, userDb);
    });
    // Google Strategy
    passport_1.default.use("google", new passport_google_oauth2_1.Strategy({
        clientID: config_1.default.googleId,
        clientSecret: config_1.default.googleSecret,
        callbackURL: "http://localhost:5005/auth/google/callback",
        passReqToCallback: true,
        scope: ["email", "profile"],
    }, async function (request, accessToken, refreshToken, profile, done) {
        try {
            const user = await userRepository.getUserByEmail(profile.emails[0].value);
            if (!user) {
                const newUser = await (0, user_1.create)(profile.displayName, "", profile.emails[0].value, profile.photos[0].value, userRepository, authService);
                await newUser.set("googleId", profile.id);
                return done(null, newUser);
            }
            return done(null, user);
        }
        catch (e) {
            return done(e);
        }
    }));
    // Local Strategy
    passport_1.default.use("local", new passport_local_1.Strategy({
        usernameField: "email",
        passwordField: "password",
        passReqToCallback: true,
    }, async (req, email, password, done) => {
        try {
            const user = await userRepository.getUserByEmail(email);
            if (!user) {
                return done(null, false, new CustomError_1.CustomError("User does not exist", 400, CustomError_1.ErrorType.EMAIL));
            }
            const match = await authService.compare(password, user.password);
            if (!match) {
                return done(null, false, new CustomError_1.CustomError("Invalid Password", 401, CustomError_1.ErrorType.PASSWORD));
            }
            return done(null, user);
        }
        catch (error) {
            return done(error);
        }
    }));
    function init() {
        app.use(passport_1.default.initialize());
        app.use(passport_1.default.session());
    }
    return {
        init,
    };
}
exports.default = passportConnection;
