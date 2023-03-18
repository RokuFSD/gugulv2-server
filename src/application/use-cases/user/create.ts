import User from "../../../entities/user";
import { IUserRepository } from "../../repositories/userRepository";
import { CustomError, ErrorType } from "../../../utils/CustomError";
import { IAuthService } from "../../services/authService";

export default async function createUser(
  name: string,
  password: string,
  email: string,
  image: string,
  userRepository: IUserRepository,
  authService: IAuthService
) {
  const userIn = await userRepository.getUserByEmail(email);
  if (userIn) {
    throw new CustomError("Email already exists", 400, ErrorType.EMAIL);
  }
  const hashedPassword = await authService.encrypt(password);
  const user = new User(name, hashedPassword, email, image);
  return userRepository.createUser(user);
}
