import passport from "passport";
import express from "express";
import { UserType } from "../../entities/user";
import { IUserRepository } from "../../application/repositories/userRepository";
import { IAuthService } from "../../application/services/authService";
import { Strategy as LocalStrategy } from "passport-local";
import { CustomError, ErrorType } from "../../utils/CustomError";

export default function passportConnection(
  app: express.Application,
  userRepository: IUserRepository,
  authService: IAuthService
) {
  passport.serializeUser((user, done) => {
    done(null, user);
  });
  passport.deserializeUser(async (user, done) => {
    const { _id } = user as UserType;
    if (!_id) return done(null, false);
    const userDb = await userRepository.getUserById(_id);
    done(null, userDb);
  });

  // Local Strategy
  passport.use(
    "local",
    new LocalStrategy(
      {
        usernameField: "email",
        passwordField: "password",
        passReqToCallback: true,
      },
      async (req, email, password, done) => {
        try {
          const user = await userRepository.getUserByEmail(email);
          if (!user) {
            return done(
              null,
              false,
              new CustomError("User does not exist", 400)
            );
          }
          const match = await authService.compare(password, user.password);
          if (!match) {
            return done(
              null,
              false,
              new CustomError("Invalid Password", 401, ErrorType.PASSWORD)
            );
          }
          return done(null, user);
        } catch (error) {
          return done(error);
        }
      }
    )
  );

  function init() {
    app.use(passport.initialize());
    app.use(passport.session());
  }

  return {
    init,
  };
}
