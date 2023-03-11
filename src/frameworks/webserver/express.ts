import express from "express";
import morgan from "morgan";
import corsOptions from "../../config/corsOptions";
import cookieParser from "cookie-parser";
import cors from "cors";

export default function expressConfig(app: express.Application) {
  /* Cors */
  app.use(cors(corsOptions));

  app.use(cookieParser());

  /* Parser */
  app.use(express.json(), express.urlencoded({ extended: false }));

  app.use(morgan("dev"));
}
