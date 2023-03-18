"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const user_1 = __importDefault(require("../../../entities/user"));
const CustomError_1 = require("../../../utils/CustomError");
async function createUser(name, password, email, image, userRepository, authService) {
    const userIn = await userRepository.getUserByEmail(email);
    if (userIn) {
        throw new CustomError_1.CustomError("Email already exists", 400, CustomError_1.ErrorType.EMAIL);
    }
    const hashedPassword = await authService.encrypt(password);
    const user = new user_1.default(name, hashedPassword, email, image);
    return userRepository.createUser(user);
}
exports.default = createUser;
