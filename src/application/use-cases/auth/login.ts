import UserRepository from "../../repositories/userRepository";
import { IAuthService } from "../../services/authService";
import { CustomError, ErrorType } from "../../../utils/CustomError";

export default async function login(
  email: string,
  password: string,
  userRepository: UserRepository,
  authService: IAuthService
) {
  const user = await userRepository.getUserByEmail(email);
  if (!user) {
    throw new CustomError("User not found", 400, ErrorType.EMAIL);
  }
  const validPassword = await authService.compare(password, user.password);
  if (!validPassword) {
    throw new CustomError("Incorrect password", 400, ErrorType.PASSWORD);
  }

  return authService.login(user);
}
