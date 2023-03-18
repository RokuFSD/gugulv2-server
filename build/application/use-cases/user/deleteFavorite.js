"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function deleteFavorite(userId, favoriteId, userRepository) {
    return userRepository.deleteFavorite(userId, favoriteId);
}
exports.default = deleteFavorite;
