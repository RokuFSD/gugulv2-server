import "express-session";
import { UserType } from "../../entities/user";

declare module "express-session" {
  export interface SessionData {
    user: Partial<UserType>;
  }
}
