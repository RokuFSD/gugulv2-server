import { IAuthService } from "../../services/authService";

export default async function logout(authService: IAuthService) {
  return authService.logout();
}
