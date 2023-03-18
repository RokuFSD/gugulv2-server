import express from "express";
import session from "express-session";
import RedisStore from "connect-redis";
import { createClient } from "redis";
import { IConfig } from "../../../config/interface";
import * as process from "process";

export default async function redisDbConnection(
  app: express.Application,
  config: IConfig
) {
  const redisClient = createClient({
    url: process.env.REDIS_URL!,
  });

  const redisStore = new RedisStore({
    client: redisClient,
  });

  redisClient.on("error", (err: Error) => {
    console.log("Redis error: ", err.stack);
    process.exit(1);
  });

  redisClient.on("connect", () => {
    console.log("Redis connected");
  });

  redisClient.on("ready", () => {
    console.log("Redis ready");
  });

  await redisClient.connect();

  function startSession() {
    app.use(
      session({
        store: redisStore,
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
