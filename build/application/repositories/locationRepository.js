"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class LocationRepository {
    repository;
    constructor(repository) {
        this.repository = repository;
        this.repository = repository;
    }
    async getLocation() {
        return await this.repository.getLocation();
    }
}
exports.default = LocationRepository;
