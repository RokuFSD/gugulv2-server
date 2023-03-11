import express from "express";
import { IConfig } from "../../config/interface";
import * as http from "http";
import * as process from "process";

export default function serverConfig(
  app: express.Application,
  config: IConfig,
  serverInit: http.Server
) {
  function startServer() {
    serverInit
      .listen(config.port)
      .on("listening", () => {
        console.log(`Server listening on port: ${config.port}`);
      })
      .on("error", (err: Error) => {
        console.error(err);
        process.exit(1);
      })
      .on("close", () => {
        console.log("Server closed");
      });
  }

  return { startServer };
}
