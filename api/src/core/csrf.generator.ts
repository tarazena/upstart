import { Request, Response } from "express";
import { Handler } from "./handler.class";
import csurf from "csurf";

class CSRFGenerator extends Handler {
  async handle(req: Request, res: Response): Promise<void> {
    const token = req.csrfToken();
    res.cookie("XSRF-TOKEN", token);
    res.status(200).json({ token });
  }
}

export const csrfGenerator = new CSRFGenerator("/csrf", "get", "none");
