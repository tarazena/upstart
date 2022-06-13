import { IHandler } from "@interfaces";
import { registerUser, loginUser } from "./user";
import { csrfGenerator } from "./core";
import { createOption, createPool, submitVote, getPool } from "./pools";

export const paths: IHandler[] = [
  registerUser,
  loginUser,
  csrfGenerator,
  createOption,
  createPool,
  submitVote,
  getPool,
];
