import { Request, Response } from "express";

export interface IHandler {
  path: string;
  method: "get" | "post" | "put" | "delete";
  useCSRF?: boolean;
  connectRequest: (
    req: Request,
    res: Response,
    middleWare?: any
  ) => Promise<void>;
}
