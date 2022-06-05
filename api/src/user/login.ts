import { Request, Response } from "express";
import { Handler } from "../core";

class LoginUser extends Handler {
  async handle(req: Request, res: Response): Promise<void> {
    const { email, password } = req.body;
    const user = await this.db.user.findFirst({
      where: {
        Credentials: {
          email,
          password,
        },
      },
    });
    if (!user) {
      res.status(401).json({ error: "Invalid credentials" });
    } else {
      res.status(200).json(user);
    }
  }
}

export const loginUser = new LoginUser("/login", "post", "none");
