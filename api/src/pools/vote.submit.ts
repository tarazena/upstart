import { Request, Response } from "express";
import { Handler } from "../core";

class SubmitVote extends Handler {
  async handle(req: Request, res: Response): Promise<void> {
    const { userId, optionId, poolId } = req.body;
   // If user with vote already exists, update it instead of creating a new one
   
    const vote = await this.db.vote.create({
      data: {
        option: {
          connect: {
            id: optionId,
          },
        },
        User: {
          connect: {
            id: userId,
          },
        },
        pool: {
          connect: {
            id: poolId,
          },
        },
      },
    });

    res.status(201).json(vote);
  }
}

export const submitVote = new SubmitVote("/votes", "post", "csrf");
