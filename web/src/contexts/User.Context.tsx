import { createContext, ReactNode, useCallback, useState } from "react";

interface User {
  id?: string;
  firstName?: string;
  lastName?: string;
  email?: string;
}

interface IUserContext {
  loggedIn: (user: User) => void;
}

type WithChildren<T = {}> = T & { children?: ReactNode };

export const UserContext = createContext<User & IUserContext>({
  id: undefined,
  firstName: undefined,
  lastName: undefined,
  email: undefined,
  loggedIn: () => undefined,
});

export const UserProvider = ({ children }: WithChildren) => {
  const [user, setUser] = useState<User>();

  const loggedIn = useCallback((user: User) => {
    setUser(user);
  }, []);

  return (
    <UserContext.Provider value={{ loggedIn, ...user }}>
      {children}
    </UserContext.Provider>
  );
};
