import { FC, useContext } from "react";
import { UserContext } from "../contexts";

export const Home: FC = () => {
  const {user} = useContext(UserContext)
  return (
    <div>
      <h1>Home</h1>
      <h2>Welcome {user?.firstName} {user?.lastName}</h2>
    </div>
  );
};
