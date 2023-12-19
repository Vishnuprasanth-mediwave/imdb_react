import { useState } from "react";
import { IUserAdd } from "./types";
interface IForm {
  handleAddUser: (movie: IUserAdd) => void;
}
const Form: React.FC<IForm> = ({ handleAddUser }) => {
  const [user, setUser] = useState<IUserAdd>({
    first_name: "",
    last_name: "",
    email: "",
    user_name: "",
    user_password: "",
    phone_no: "",
  });
  const [conPass, setConpass] = useState("");
  const [passError, setPassError] = useState({
    error: "",
    show: false,
  });
  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  }
  function handleconfirmPassword(e: React.ChangeEvent<HTMLInputElement>) {
    const { value } = e.target;
    setConpass(value);
  }
  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (conPass === user.user_password) {
      handleAddUser(user);
    } else {
      setPassError({ ...passError, error: "password not match", show: true });
    }
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
        <label htmlFor="confirm-password">
          confirm-Password
          <input
            type="text"
            id="confirm-password"
            name="confirm-password"
            placeholder="confirm Password"
            onChange={handleconfirmPassword}
            required
          />
          {passError.show && <p style={{ color: "red" }}>{passError.error}</p>}
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
