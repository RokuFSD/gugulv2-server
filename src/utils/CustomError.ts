export enum ErrorType {
  FORM = "form",
  EMAIL = "email",
  USERNAME = "username",
  PASSWORD = "password",
}

export class CustomError extends Error {
  type?: ErrorType;
  statusCode?: number;

  constructor(message: string, statusCode: number, type?: ErrorType) {
    super(message);
    this.name = this.constructor.name;
    this.statusCode = statusCode;
    this.type = type;
    Error.captureStackTrace(this, this.constructor);
  }
}
