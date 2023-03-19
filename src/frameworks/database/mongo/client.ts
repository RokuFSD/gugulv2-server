import express from "express";
import session from "express-session";
import MongoStore from "connect-mongo";
import { IConfig } from "../../../config/interface";

export default async function mongoStoreConnection(
  app: express.Application,
  config: IConfig
) {
  const mongoStore = new MongoStore({
    mongoUrl: config.mongoURI,
    collectionName: "sessions",
  });

  function startSession() {
    app.set("trust proxy", 1);
    app.use(
      session({
        store: mongoStore,
        secret: config.redisSecret,
        resave: false,
        saveUninitialized: false,
        cookie: {
          maxAge: 1000 * 60 * 60 * 24 * 7,
          httpOnly: true,
          sameSite: "none",
          secure: "auto",
        },
      })
    );
  }

  return {
    startSession,
  };
}
