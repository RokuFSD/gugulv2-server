"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
async function search(params, searchRepository) {
    return await searchRepository.search(params);
}
exports.default = search;
