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

  // const redisClient = createClient();
  //
  // const redisStore = new RedisStore({
  //   client: redisClient,
  // });
  //
  // redisClient.on("error", (err: Error) => {
  //   console.log("Redis error: ", err.stack);
  //   process.exit(1);
  // });
  //
  // redisClient.on("connect", () => {
  //   console.log("Redis connected");
  // });
  //
  // redisClient.on("ready", () => {
  //   console.log("Redis ready");
  // });
  //
  // await redisClient.connect();

  function startSession() {
    app.use(
      session({
        store: mongoStore,
        secret: config.redisSecret,
        resave: false,
        saveUninitialized: false,
        cookie: {
          maxAge: 1000 * 60 * 60 * 24 * 7,
          httpOnly: true,
          sameSite: "lax",
        },
      })
    );
  }

  return {
    startSession,
  };
}
