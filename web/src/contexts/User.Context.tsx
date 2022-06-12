import { createContext, useCallback, useState } from "react";
import { IUserContext, User, WithChildren } from "../core";

export const UserContext = createContext<IUserContext>({
  user: undefined,
  loggedIn: () => undefined,
});

export const UserProvider = ({ children }: WithChildren) => {
  const [user, setUser] = useState<User>();

  const loggedIn = useCallback((user: User) => {
    setUser(user);
  }, []);

  return (
    <UserContext.Provider value={{ loggedIn, user }}>
      {children}
    </UserContext.Provider>
  );
};
