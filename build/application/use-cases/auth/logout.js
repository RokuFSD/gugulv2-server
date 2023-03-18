"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
async function logout(authService) {
    return authService.logout();
}
exports.default = logout;
