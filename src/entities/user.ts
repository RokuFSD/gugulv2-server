import { Card } from "./card";

export type UserType = {
  _id?: string;
  name: string;
  email: string;
  password: string;
  favorites: Card[];
};

export interface IUser {
  getName(): string;

  getPassword(): string;

  getEmail(): string;
}

export default class User implements IUser {
  name: string;
  password: string;
  email: string;
  favorites: Card[];

  constructor(name: string, password: string, email: string) {
    this.name = name;
    this.password = password;
    this.email = email;
    this.favorites = [];
  }

  getEmail(): string {
    return this.email;
  }

  getPassword(): string {
    return this.password;
  }

  getName(): string {
    return this.name;
  }
}
