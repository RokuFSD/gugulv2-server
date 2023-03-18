"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const CustomError_1 = require("../../utils/CustomError");
const user_1 = require("../../application/use-cases/user");
function userController(userRepository, userRepositoryImpl, authService, authServiceImpl) {
    const currentUserRepository = new userRepository(userRepositoryImpl);
    const currentAuthService = new authService(authServiceImpl);
    async function createUser(req, res, next) {
        const { name, email, password } = req.body;
        if (!name || !email || !password) {
            return next(new CustomError_1.CustomError("All fields are required", 400, CustomError_1.ErrorType.FORM));
        }
        try {
            const user = await (0, user_1.create)(name, password, email, "", currentUserRepository, currentAuthService);
            res.status(201).json(user);
        }
        catch (e) {
            const err = e;
            return next(err);
        }
    }
    async function getAll(req, res, next) {
        try {
            const users = await (0, user_1.findAll)(currentUserRepository);
            res.json({ data: users });
        }
        catch (e) {
            const err = e;
            return next(err);
        }
    }
    async function updateUser(req, res, next) {
        const { _id } = req.session.user; // We know that the user is logged in
        const values = req.body;
        try {
            const user = await (0, user_1.update)(_id, values, currentUserRepository);
            // Update the session
            req.session.user = user;
            res.json(user);
        }
        catch (e) {
            const err = e;
            return next(err);
        }
    }
    async function deleteFav(req, res, next) {
        const { _id } = req.user;
        const { favoriteId } = req.params;
        try {
            const updatedFavorites = await (0, user_1.deleteFavorite)(_id, favoriteId, currentUserRepository);
            res.json(updatedFavorites);
        }
        catch (e) {
            const err = e;
            return next(err);
        }
    }
    async function addFav(req, res, next) {
        const { _id } = req.user;
        const favoriteCard = req.body;
        if (!favoriteCard._id)
            throw new CustomError_1.CustomError("There is must be an id", 400);
        try {
            const updatedFavorites = await (0, user_1.addFavorite)(_id, favoriteCard, currentUserRepository);
            res.json(updatedFavorites);
        }
        catch (e) {
            const err = e;
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
exports.default = userController;
