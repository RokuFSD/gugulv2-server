import passport from "passport";
import express, { Request } from "express";
import { UserType } from "../../entities/user";
import { IUserRepository } from "../../application/repositories/userRepository";
import { IAuthService } from "../../application/services/authService";
import { Strategy as LocalStrategy } from "passport-local";
import { CustomError, ErrorType } from "../../utils/CustomError";
import {
  Strategy as GoogleStrategy,
  VerifyCallback,
} from "passport-google-oauth2";
import { create } from "../../application/use-cases/user";
import config from "../../config/config";

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

  // Google Strategy
  passport.use(
    "google",
    new GoogleStrategy(
      {
        clientID: config.googleId,
        clientSecret: config.googleSecret,
        callbackURL: "https://gugul-srv.onrender.com/auth/google/callback",
        passReqToCallback: true,
        scope: ["email", "profile"],
      },
      async function (
        request: Request,
        accessToken: string,
        refreshToken: string,
        profile: any,
        done: VerifyCallback
      ) {
        try {
          const user = await userRepository.getUserByEmail(
            profile.emails[0].value
          );
          if (!user) {
            const newUser = await create(
              profile.displayName,
              "",
              profile.emails[0].value,
              profile.photos[0].value,
              userRepository,
              authService
            );
            await newUser.set("googleId", profile.id);
            return done(null, newUser);
          }
          return done(null, user);
        } catch (e) {
          return done(e);
        }
      }
    )
  );

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
              new CustomError("User does not exist", 400, ErrorType.EMAIL)
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
