"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function addFavorite(userId, favorite, userRepository) {
    return userRepository.addFavorite(userId, favorite);
}
exports.default = addFavorite;
