import { IAuthService } from "../../application/services/authService";
import * as bcrypt from "bcrypt";
import { UserType } from "../../entities/user";

export default class AuthServiceLocal implements IAuthService {
  async compare(password: string, hash: string) {
    return await bcrypt.compare(password, hash);
  }

  async encrypt(password: string) {
    const salt = await bcrypt.genSalt(10);
    return bcrypt.hash(password, salt);
  }

  login(user: Partial<UserType>) {
    return { message: "Logged in", user };
  }

  logout(): { message: string } {
    return { message: "Logged out" };
  }
}
