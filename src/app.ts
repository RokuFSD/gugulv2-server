import express from "express";
import config from "./config/config";
import * as http from "http";
import routes from "./frameworks/webserver/routes";
import serverConfig from "./frameworks/webserver/server";
import expressConfig from "./frameworks/webserver/express";
import mongoDbConnection from "./frameworks/database/mongo/connection";
import mongoStoreConnection from "./frameworks/database/mongo/client";
import passportConnection from "./frameworks/services/passport";
import AuthServiceLocal from "./frameworks/services/authService";
import UserRepositoryMongo from "./frameworks/database/mongo/repositories/userRepositoryMongo";
import errorHandlingMiddleware from "./frameworks/webserver/middlewares/errorHandler";

const app = express();
const server = http.createServer(app);

expressConfig(app);

mongoStoreConnection(app, config).then(({ startSession }) => {
  startSession();
  // Passport configuration
  passportConnection(
    app,
    new UserRepositoryMongo(),
    new AuthServiceLocal()
  ).init();
  // Routes
  routes(app);

  // Error handling
  app.use(errorHandlingMiddleware);
});

mongoDbConnection().connectToMongo();

serverConfig(app, config, server).startServer();

// Expose app
export default app;
