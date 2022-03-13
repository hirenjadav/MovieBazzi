import React, { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css";
import "../css/style.css";
import "../css/header.css";

function Header(props) {
  const [user, setUser] = useState();

  useEffect(() => {
    setUser(props.user);
  }, [props.user]);

  return (
    <div className="header">
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container">
          <NavLink className="navbar-brand" to="/">
            Website
          </NavLink>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarNavDropdown"
            aria-controls="navbarNavDropdown"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavDropdown">
            <ul className="navbar-nav">
              <li className="nav-item active">
                <NavLink className="nav-link" to="/">
                  Home <span className="sr-only"></span>
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/movies">
                  Movies
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/tvshows">
                  TV Shows
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/books">
                  Books
                </NavLink>
              </li>
            </ul>
          </div>

          {!user && (
            <Link to="/login">
              <button class="btn btn-warning ">Log In</button>
            </Link>
          )}
          {user && (
            <React.Fragment>
              <Link to="/profile">
                {/* <button class="btn btn-warning ">{user.name}</button> */}
                <div className="header-profile-name">
                  <p>Hi {user.name}</p>
                </div>
              </Link>
              <Link to="/logout">
                <button class="btn btn-warning">Log out</button>
              </Link>
            </React.Fragment>
          )}
        </div>
      </nav>
    </div>
  );
}

export default Header;
