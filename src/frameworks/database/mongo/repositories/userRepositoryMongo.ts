import { UserType } from "../../../../entities/user";
import { IUserRepository } from "../../../../application/repositories/userRepository";
import { Card } from "../../../../entities/card";
import UserModel from "../models/user";

export default class UserRepositoryMongo implements IUserRepository {
  async update(id: string, fields: { [p: string]: string }) {
    const updatedUser = await UserModel.findOneAndUpdate({ _id: id }, fields, {
      returnDocument: "after",
    });
    if (!updatedUser) return undefined;
    return updatedUser;
  }

  async createUser(user: UserType): Promise<UserType> {
    return await UserModel.create(user);
  }

  async getUserByEmail(email: string) {
    const user = await UserModel.findOne({ email }).select("+password").exec();
    if (!user) return undefined;
    return user.toObject();
  }

  async getUserById(id: string): Promise<UserType | undefined> {
    const user = await UserModel.findById(id).exec();
    //TODO: This is bad delete the undefined
    if (!user) return undefined;
    return user;
  }

  async getAll() {
    return await UserModel.find().exec();
  }

  async addFavorite(idUser: string, favorite: Card) {
    const user = await UserModel.findByIdAndUpdate(
      idUser,
      { $push: { favorites: favorite } },
      { returnDocument: "after" }
    ).exec();
    if (!user) return undefined;
    return user.favorites;
  }

  async deleteFavorite(idUser: string, idFavorite: string) {
    const user = await UserModel.findByIdAndUpdate(
      idUser,
      { $pull: { favorites: { _id: idFavorite } } },
      { returnDocument: "after" }
    ).exec();

    if (!user) return undefined;
    return user.favorites;
  }
}
