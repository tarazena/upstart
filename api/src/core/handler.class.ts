import { IHandler } from "@interfaces";
import { PrismaClient } from "@prisma/client";
import { Request, Response } from "express";
import csrf from "csurf";

export abstract class Handler implements IHandler {
  path: string;
  method: "get" | "post" | "put" | "delete";
  useCSRF: boolean = false;
  protected authType: "jwt" | "csrf" | "none";
  protected db: PrismaClient;
  protected csrfProtect = csrf({ cookie: true });

  constructor(
    path: string,
    method: "get" | "post" | "put" | "delete",
    authType: "jwt" | "csrf" | "none",
    useCSRF: boolean = false
  ) {
    this.path = path;
    this.method = method;
    this.authType = authType;
    this.db = new PrismaClient();
    this.useCSRF = useCSRF;
  }

  protected abstract handle(
    req: Request,
    res: Response,
    middleWare?: any
  ): Promise<void>;

  connectRequest = (req: Request, res: Response): Promise<void> => {
    switch (this.authType) {
      case "csrf":
        return this.handle(req, res, this.csrfProtect);
      default:
        return this.handle(req, res);
    }
  };
}
