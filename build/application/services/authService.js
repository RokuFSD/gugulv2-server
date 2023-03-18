"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class AuthService {
    service;
    constructor(service) {
        this.service = service;
    }
    compare(password, hash) {
        return this.service.compare(password, hash);
    }
    encrypt(password) {
        return this.service.encrypt(password);
    }
    login(user) {
        return this.service.login(user);
    }
    logout() {
        return this.service.logout();
    }
}
exports.default = AuthService;
