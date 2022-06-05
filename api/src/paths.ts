import { IHandler } from "@interfaces";
import { registerUser, loginUser } from "./user";

export const paths: IHandler[] = [registerUser, loginUser];
