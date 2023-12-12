import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <nav className="titleBar">
      <Link to="/" className="logo">
        IMDB
      </Link>
      <input className="nav-inp" type="text" placeholder="search" />
      <ul className="navBar">
        <li>
          <Link to="/signup">SignUp</Link>
        </li>
        <li>
          <Link to="/login">LogIn</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
