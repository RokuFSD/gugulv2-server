"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class UserRepository {
    repository;
    constructor(repository) {
        this.repository = repository;
        this.repository = repository;
    }
    update(id, fields) {
        return this.repository.update(id, fields);
    }
    getUserByEmail(email) {
        return this.repository.getUserByEmail(email);
    }
    getUserById(id) {
        return this.repository.getUserById(id);
    }
    createUser(user) {
        return this.repository.createUser(user);
    }
    getAll() {
        return this.repository.getAll();
    }
    addFavorite(idUser, favorite) {
        return this.repository.addFavorite(idUser, favorite);
    }
    deleteFavorite(idUser, idFavorite) {
        return this.repository.deleteFavorite(idUser, idFavorite);
    }
}
exports.default = UserRepository;
