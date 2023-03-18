"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class User {
    name;
    password;
    email;
    favorites;
    image;
    constructor(name, password, email, image) {
        this.name = name;
        this.password = password;
        this.email = email;
        this.favorites = [];
        this.image = image;
    }
    getEmail() {
        return this.email;
    }
    getPassword() {
        return this.password;
    }
    getName() {
        return this.name;
    }
}
exports.default = User;
