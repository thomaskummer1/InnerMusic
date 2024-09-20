import { Link } from "react-router-dom";

export default function NavBar() {
  return (
    <nav>
      <img id="logo" src="images/Logo.jpeg" height="200px" />
      <h1>Inner Music</h1>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/SignIn">Sign In</Link>
        </li>
        <li>
          <Link to="/Profile">Profile</Link>
        </li>
      </ul>
    </nav>
  );
}
