import { useState } from "react";
import { Ilogin } from "../components/types";

const LoginForm = () => {
  const [login, setLogin] = useState<Ilogin>({
    email: "",
    user_password: "",
  });
  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    const { name, value } = e.target;
    setLogin({ ...login, [name]: value });
  }
  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    async function handleAddMovie(user: IUserAdd) {
      try {
        const userPayload = {
          email: user.email,
          user_password: user.user_password,
        };
        console.log(userPayload);
        const response = await addUser(userPayload);
        console.log(response);
      } catch (error) {
        if (error instanceof Error) {
          console.error("Error deleting movie:", error);
        }
      }
    }
  }
  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="email">Email address</label>
      <input
        type="email"
        id="email"
        name="email"
        placeholder="Email address"
        onChange={handleChange}
        required
      />
      <label htmlFor="password">
        Password
        <input
          type="text"
          id="user_password"
          name="user_password"
          placeholder="Password"
          onChange={handleChange}
          required
        />
      </label>
      <button type="submit">Submit</button>
    </form>
  );
};
