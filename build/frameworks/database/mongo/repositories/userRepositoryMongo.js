"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const user_1 = __importDefault(require("../models/user"));
class UserRepositoryMongo {
    async update(id, fields) {
        const updatedUser = await user_1.default.findOneAndUpdate({ _id: id }, fields, {
            returnDocument: "after",
        });
        if (!updatedUser)
            return undefined;
        return updatedUser;
    }
    async createUser(user) {
        return await user_1.default.create(user);
    }
    async getUserByEmail(email) {
        const user = await user_1.default.findOne({ email }).select("+password").exec();
        if (!user)
            return undefined;
        return user.toObject();
    }
    async getUserById(id) {
        const user = await user_1.default.findById(id).exec();
        //TODO: This is bad delete the undefined
        if (!user)
            return undefined;
        return user;
    }
    async getAll() {
        return await user_1.default.find().exec();
    }
    async addFavorite(idUser, favorite) {
        const user = await user_1.default.findByIdAndUpdate(idUser, { $push: { favorites: favorite } }, { returnDocument: "after" }).exec();
        if (!user)
            return undefined;
        return user.favorites;
    }
    async deleteFavorite(idUser, idFavorite) {
        const user = await user_1.default.findByIdAndUpdate(idUser, { $pull: { favorites: { _id: idFavorite } } }, { returnDocument: "after" }).exec();
        if (!user)
            return undefined;
        return user.favorites;
    }
}
exports.default = UserRepositoryMongo;
