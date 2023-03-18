import { CustomError, ErrorType } from "../../utils/CustomError";
import { NextFunction, Request, Response } from "express";

import {
  create,
  addFavorite,
  update,
  findAll,
  deleteFavorite,
} from "../../application/use-cases/user";

import { Card } from "../../entities/card";
import { UserType } from "../../entities/user";

import AuthService, {
  IAuthService,
} from "../../application/services/authService";
import UserRepository, {
  IUserRepository,
} from "../../application/repositories/userRepository";

export default function userController(
  userRepository: typeof UserRepository,
  userRepositoryImpl: IUserRepository,
  authService: typeof AuthService,
  authServiceImpl: IAuthService
) {
  const currentUserRepository = new userRepository(userRepositoryImpl);
  const currentAuthService = new authService(authServiceImpl);

  async function createUser(req: Request, res: Response, next: NextFunction) {
    const { name, email, password } = req.body;
    if (!name || !email || !password) {
      return next(
        new CustomError("All fields are required", 400, ErrorType.FORM)
      );
    }
    try {
      const user = await create(
        name,
        password,
        email,
        "",
        currentUserRepository,
        currentAuthService
      );
      res.status(201).json(user);
    } catch (e) {
      const err = e as CustomError;
      return next(err);
    }
  }

  async function getAll(req: Request, res: Response, next: NextFunction) {
    try {
      const users = await findAll(currentUserRepository);
      res.json({ data: users });
    } catch (e) {
      const err = e as CustomError;
      return next(err);
    }
  }

  async function updateUser(req: Request, res: Response, next: NextFunction) {
    const { _id } = req.session.user as UserType; // We know that the user is logged in
    const values = req.body;
    try {
      const user = await update(_id as string, values, currentUserRepository);
      // Update the session
      req.session.user = user;
      res.json(user);
    } catch (e) {
      const err = e as CustomError;
      return next(err);
    }
  }

  async function deleteFav(req: Request, res: Response, next: NextFunction) {
    const { _id } = req.user as UserType;
    const { favoriteId } = req.params;
    try {
      const updatedFavorites = await deleteFavorite(
        _id as string,
        favoriteId,
        currentUserRepository
      );
      res.json(updatedFavorites);
    } catch (e) {
      const err = e as CustomError;
      return next(err);
    }
  }

  async function addFav(req: Request, res: Response, next: NextFunction) {
    const { _id } = req.user as UserType;
    const favoriteCard = req.body as Card;
    if (!favoriteCard._id) throw new CustomError("There is must be an id", 400);
    try {
      const updatedFavorites = await addFavorite(
        _id as string,
        favoriteCard,
        currentUserRepository
      );
      res.json(updatedFavorites);
    } catch (e) {
      const err = e as CustomError;
      return next(err);
    }
  }

  return {
    createUser,
    getAll,
    updateUser,
    deleteFav,
    addFav,
  };
}
