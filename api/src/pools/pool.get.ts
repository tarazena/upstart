import { Request, Response } from "express";
import { Handler } from "../core";

class GetPool extends Handler {
  async handle(req: Request, res: Response): Promise<void> {
    const { poolId } = req.body;

    const pool = await this.db.pool.findUnique({
      where: {
        id: poolId,
      },
      include: {
        options: {
          include: {
            votes: true,
          },
        },
      },
    });
  }
}

export const getPool = new GetPool("/pools", "post", "csrf");
