import dotenv from "dotenv";
import { IConfig } from "./interface";

const envFound = dotenv.config();

if (!envFound) {
  throw new Error("Couldn't find .env files");
}

if (!process.env.PORT) {
  throw new Error("PORT is not defined");
}

export default {
  port: parseInt(process.env.PORT, 10),
  serpKey: process.env.SERP_KEY,
  mongoURI: process.env.MONGO_URI,
  redisSecret: process.env.REDIS_SECRET,
  googleId: process.env.GOOGLE_CLIENT_ID,
  googleSecret: process.env.GOOGLE_CLIENT_SECRET,
} as IConfig;
