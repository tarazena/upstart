import { Request, Response } from "express";
import { Handler } from "../core";

class RegisterUser extends Handler {
  async handle(req: Request, res: Response): Promise<void> {
    const { firstName, lastName, email, password } = req.body;
    const user = await this.db.user.create({
      data: {
        firstName,
        lastName,
        Credentials: {
          create: {
            email,
            password,
          },
        },
      },
    });
    res.status(201).json(user);
  }
}

export const registerUser = new RegisterUser("/register", "post", "none");
