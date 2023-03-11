import { Card } from "../../entities/card";
import { UserType } from "../../entities/user";

export interface IUserRepository {
  getUserById(id: string): Promise<UserType | undefined>;

  getUserByEmail(email: string): Promise<UserType | undefined>;

  createUser(user: UserType): Promise<UserType>;

  update(
    id: string,
    fields: { [p: string]: string }
  ): Promise<UserType | undefined>;

  getAll(): Promise<UserType[]>;

  addFavorite(idUser: string, favorite: Card): Promise<Card[] | undefined>;

  deleteFavorite(
    idUser: string,
    idFavorite: string
  ): Promise<Card[] | undefined>;
}

export default class UserRepository implements IUserRepository {
  constructor(private readonly repository: IUserRepository) {
    this.repository = repository;
  }

  update(id: string, fields: { [p: string]: string }) {
    return this.repository.update(id, fields);
  }

  getUserByEmail(email: string) {
    return this.repository.getUserByEmail(email);
  }

  getUserById(id: string) {
    return this.repository.getUserById(id);
  }

  createUser(user: UserType) {
    return this.repository.createUser(user);
  }

  getAll() {
    return this.repository.getAll();
  }

  addFavorite(idUser: string, favorite: Card) {
    return this.repository.addFavorite(idUser, favorite);
  }

  deleteFavorite(idUser: string, idFavorite: string) {
    return this.repository.deleteFavorite(idUser, idFavorite);
  }
}
