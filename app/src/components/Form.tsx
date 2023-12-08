import { useState } from "react";
import { IUserAdd } from "./types";
interface IForm {
  handleAddMovie: (movie: IUserAdd) => void;
}
const Form: React.FC<IForm> = ({ handleAddMovie }) => {
  const [user, setUser] = useState<IUserAdd>({
    first_name: "",
    last_name: "",
    email: "",
    user_name: "",
    user_password: "",
    phone_no: "",
  });
  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  }
  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    handleAddMovie(user);
  }
  return (
    <>
      <form onSubmit={handleSubmit}>
        <label htmlFor="firstname">Firstname</label>

        <input
          type="text"
          id="first_name"
          name="first_name"
          placeholder="First name"
          onChange={handleChange}
          required
        />

        <label htmlFor="lastname">Lastname</label>

        <input
          type="text"
          id="last_name"
          name="last_name"
          placeholder="Last name"
          onChange={handleChange}
        />
        <label htmlFor="email">Email address</label>

        <input
          type="email"
          id="email"
          name="email"
          placeholder="Email address"
          onChange={handleChange}
          required
        />

        <label htmlFor="username">Username</label>

        <input
          type="text"
          id="user_name"
          name="user_name"
          placeholder="Username"
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
        <label htmlFor="phone">Phone</label>
        <input
          type="text"
          id="phone_no"
          name="phone_no"
          placeholder="Phone"
          onChange={handleChange}
        />
        <button type="submit">Submit</button>
      </form>
    </>
  );
};
export default Form;
