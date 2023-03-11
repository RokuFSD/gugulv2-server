/* eslint-disable */
import { NextFunction, Request, Response } from "express";
import { CustomError } from "../../../utils/CustomError";

export default function errorHandlingMiddleware(
  err: CustomError,
  req: Request,
  res: Response,
  next: NextFunction
) {
  err.statusCode = err.statusCode || 404;
  err.message = err.message || "Not Found";
  return res.status(err.statusCode).json({
    message: err.message,
    type: err.type,
  });
}
