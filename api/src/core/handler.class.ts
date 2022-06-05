import { IHandler } from "@interfaces";
import { PrismaClient } from "@prisma/client";
import { Request, Response } from "express";

export abstract class Handler implements IHandler {
  path: string;
  method: "get" | "post" | "put" | "delete";

  protected authType: "jwt" | "basic" | "none";
  protected db: PrismaClient;

  constructor(
    path: string,
    method: "get" | "post" | "put" | "delete",
    authType: "jwt" | "none"
  ) {
    this.path = path;
    this.method = method;
    this.authType = authType;
    this.db = new PrismaClient();
  }

  protected abstract handle(req: Request, res: Response): Promise<void>;

  connectRequest = (req: Request, res: Response): Promise<void> => {
    switch (this.authType) {
      case "jwt":
      default:
        return this.handle(req, res);
    }
  }
}
