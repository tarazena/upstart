import { Request, Response } from "express";
import { Handler } from "../core";

class CreatePool extends Handler {
  async handle(req: Request, res: Response): Promise<void> {
    const { name, description, userId } = req.body;
    const pool = await this.db.pool.create({
      data: {
        name,
        description,
        user: {
          connect: {
            id: userId,
          },
        },
      },
    });
    res.status(201).json(pool);
  }
}

export const createPool = new CreatePool("/pools", "post", "csrf");
