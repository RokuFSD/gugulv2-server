"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
async function update(id, fields, userRepository) {
    return userRepository.update(id, fields);
}
exports.default = update;
