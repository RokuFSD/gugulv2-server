"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const CustomError_1 = require("../../../utils/CustomError");
async function login(email, password, userRepository, authService) {
    const user = await userRepository.getUserByEmail(email);
    if (!user) {
        throw new CustomError_1.CustomError("User not found", 400, CustomError_1.ErrorType.EMAIL);
    }
    const validPassword = await authService.compare(password, user.password);
    if (!validPassword) {
        throw new CustomError_1.CustomError("Incorrect password", 400, CustomError_1.ErrorType.PASSWORD);
    }
    return authService.login(user);
}
exports.default = login;
