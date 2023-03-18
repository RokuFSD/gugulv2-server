"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class searchRepository {
    repository;
    constructor(repository) {
        this.repository = repository;
        this.repository = repository;
    }
    async search(params) {
        return await this.repository.search(params);
    }
}
exports.default = searchRepository;
