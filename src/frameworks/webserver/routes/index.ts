import express from "express";
import userRouter from "./userRouter";
import authRouter from "./authRouter";
import checkRouter from "./checkRouter";
import searchRouter from "./searchRouter";
import favoritesRouter from "./favoritesRouter";

export default function routes(app: express.Application) {
  console.log("Routes");
  app.use("/", searchRouter);
  app.use("/health", checkRouter);
  app.use("/users", userRouter);
  app.use("/auth", authRouter);
  app.use("/favorites", favoritesRouter);
}
