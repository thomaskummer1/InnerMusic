import { useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

export default function NavBar() {
  const { currentUser } = useSelector((state: any) => state.accountReducer);
  const [search, setSearch] = useState("");
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid">
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="text-primary-light navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link
                to="/"
                style={{
                  fontSize: "2rem",
                  fontWeight: "bold",
                  color: "#28245e",
                  textDecoration: "none",
                }}
              >
                <img id="logo" src="images/Logo.png" width="97" height="71" />
                Inner Music
              </Link>
            </li>
            {/* <li className="nav-item">
              <a className="nav-link" href="#">
                Link
              </a>
            </li>
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Dropdown
              </a>
              <ul className="dropdown-menu">
                <li>
                  <a className="dropdown-item" href="#">
                    Action
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Another action
                  </a>
                </li>
                <li>
                  <hr className="dropdown-divider" />
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Something else here
                  </a>
                </li>
              </ul>
            </li>
            <li className="nav-item">
              <a className="nav-link disabled" aria-disabled="true">
                Disabled
              </a>
            </li> */}
          </ul>
          <form className="d-flex me-4" role="search">
            <input
              className=""
              type="search"
              // placeholder="Tune In"
              placeholder="Search Artist Name"
              aria-label="Search"
              onChange={(e) => setSearch(e.target.value)}
            />
            <Link to={`/Search/${search}`}>
              <button className="" type="submit">
                Search
              </button>
            </Link>
          </form>
          {!currentUser && (
            <Link className="me-4" to="/SignIn">
              <button>Sign In</button>
            </Link>
          )}
          {currentUser && (
            <Link to="/Profile">
              <button>Profile</button>
            </Link>
          )}
        </div>
      </div>
    </nav>
  );
}
