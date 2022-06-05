import { Request, Response } from "express";

export interface IHandler {
  path: string;
  method: "get" | "post" | "put" | "delete";
  connectRequest: (req: Request, res: Response) => Promise<void>;
}
