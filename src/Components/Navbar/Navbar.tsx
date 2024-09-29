import { Link } from "react-router-dom";

export default function NavBar() {
  return (
    <nav className="navbar navbar-light bg-light">
      <Link
        className="no-link"
        // style={{ color: "#28245e", textDecoration: "none" }}
        to="/"
      >
        <img id="logo" src="images/Logo.png" width="68" height="50" />
        Inner Music
      </Link>

      <form className="d-flex">
        <input type="search" placeholder="Search" aria-label="Search" />
        <button type="submit">Search</button>
      </form>
      <Link to="/SignIn">
        <button>Sign In</button>
      </Link>
      <Link to="/Profile">
        <button>Profile</button>
      </Link>
    </nav>
  );
}
