import { Response } from "express";
import { Request } from "express-serve-static-core";
import { Handler } from "../core";

class CreateOption extends Handler {
  async handle(req: Request, res: Response): Promise<void> {
    const { userId, poolId, title } = req.body;
    const option = await this.db.option.create({
      data: {
        title,
        userId,
        poolId,
      },
    });
    res.status(201).json(option);
  }
}

export const createOption = new CreateOption("/options", "post", "csrf");
