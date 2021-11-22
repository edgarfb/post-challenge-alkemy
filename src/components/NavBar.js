import React from "react";
import styled from "styled-components";
import LogInContext from "../store/login-context";
import { Link } from "react-router-dom";

function NavBar() {
  const loginCtx = React.useContext(LogInContext);
  const isLoggedIn = loginCtx.isLoggedIn;
  const logOutHandler = loginCtx.logOutHandler;
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          AlkemyBlog
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="/">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/post-create">
                New Post
              </Link>
            </li>
            {/* <li className="nav-item">
              <Link className="nav-link" to="/post-edit">
                Edit Post
              </Link>
            </li> */}
            {isLoggedIn && (
              <li className="nav-iten">
                <button className="btn btn-success" onClick={logOutHandler}>
                  Logout
                </button>
              </li>
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
