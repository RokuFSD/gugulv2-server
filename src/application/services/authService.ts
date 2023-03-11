import { UserType } from "../../entities/user";

export interface IAuthService {
  compare(password: string, hash: string): Promise<boolean>;

  encrypt(password: string): Promise<string>;

  login(user: Partial<UserType>): { message: string; user: Partial<UserType> };

  logout(): { message: string };
}

export default class AuthService implements IAuthService {
  service: IAuthService;

  constructor(service: IAuthService) {
    this.service = service;
  }

  compare(password: string, hash: string) {
    return this.service.compare(password, hash);
  }

  encrypt(password: string) {
    return this.service.encrypt(password);
  }

  login(user: Partial<UserType>) {
    return this.service.login(user);
  }

  logout() {
    return this.service.logout();
  }
}
