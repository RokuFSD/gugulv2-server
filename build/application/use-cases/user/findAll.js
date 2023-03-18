"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
async function findAll(userRepository) {
    return await userRepository.getAll();
}
exports.default = findAll;
