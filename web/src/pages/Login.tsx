import axios from "axios";
import { FC, FormEvent, useCallback, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { API_ENDPOINT } from "../core";
import { UserContext } from "../contexts";

export const Login: FC = () => {
  const navigate = useNavigate();
  const { loggedIn } = useContext(UserContext);
  const onSubmit = useCallback(
    async (event: FormEvent<HTMLFormElement>) => {
      event.preventDefault();
      const data = new FormData(event.currentTarget);
      const password = data.get("password")?.toString();
      const email = data.get("email")?.toString();
      try {
        const response = await axios.post(`${API_ENDPOINT}/api/login`, {
          password,
          email,
        });
        if (response.status === 200) {
          alert("Successfully Logged In");
          loggedIn(response.data);
          navigate("/home");
        } else {
          alert("Invalid credentials");
        }
      } catch (error) {
        console.error(error);
      }
    },
    [navigate, loggedIn]
  );

  return (
    <div
      style={{
        display: "flex",
        height: "100%",
        flexDirection: "column",
        margin: "0 auto",
        textAlign: "center",
      }}
    >
      <h1>Login</h1>
      <form
        onSubmit={onSubmit}
        style={{
          display: "flex",
          flexDirection: "column",
          width: 300,
          margin: "0 auto",
        }}
      >
        <label htmlFor="email">Email</label>
        <input type="text" name="email" placeholder="Email" />
        <label htmlFor="password">Password</label>
        <input type="password" name="password" placeholder="Password" />

        <button type="submit">Login</button>
      </form>
    </div>
  );
};
