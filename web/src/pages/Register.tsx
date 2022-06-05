import axios from "axios";
import { FC, FormEvent, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { API_ENDPOINT } from "../core";

export const Register: FC = () => {
  const navigate = useNavigate();

  const onSubmit = useCallback(
    async (event: FormEvent<HTMLFormElement>) => {
      event.preventDefault();
      const data = new FormData(event.currentTarget);
      const firstName = data.get("firstName")?.toString();
      const lastName = data.get("lastName")?.toString();
      const password = data.get("password")?.toString();
      const email = data.get("email")?.toString();
      try {
        const response = await axios.post(`${API_ENDPOINT}/api/register`, {
          firstName,
          lastName,
          password,
          email,
        });
        if (response.status === 201) {
          alert("Successfully registered");
          navigate("/login");
        } else {
          alert("Uh oh, something went wrong");
        }
      } catch (error) {
        console.error(error);
      }
    },
    [navigate]
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
      <h1>Register</h1>
      <form
        onSubmit={onSubmit}
        style={{
          display: "flex",
          flexDirection: "column",
          width: 300,
          margin: "0 auto",
        }}
      >
        <label htmlFor="firstName">First Name</label>
        <input type="text" name="firstName" placeholder="First Name" />
        <label htmlFor="lastName">Last Name</label>
        <input type="text" name="lastName" placeholder="Last Name" />
        <label htmlFor="email">Email</label>
        <input type="text" name="email" placeholder="Email" />
        <label htmlFor="password">Password</label>
        <input type="password" name="password" placeholder="Password" />

        <button type="submit">Register</button>
      </form>
    </div>
  );
};
