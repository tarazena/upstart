import { ReactNode } from "react";

export interface User {
  id?: string;
  firstName?: string;
  lastName?: string;
  email?: string;
}

export interface IUserContext {
  loggedIn: (user: User) => void;
  user?: User;
}

export type WithChildren<T = {}> = T & { children?: ReactNode };