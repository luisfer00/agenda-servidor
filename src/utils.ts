import { Response, Request, NextFunction } from "express";
import { validationResult } from "express-validator";
import { RequestError } from "./types";

export const handleRequestError = (res: Response, e: Error) =>
  res
    .status(e instanceof RequestError ? e.statusCode : 500)
    .json({ error: true, message: e.message });
