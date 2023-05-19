import React from "react";
import { Link, NavLink } from "react-router-dom";
import useAuth from "../hooks/useAuth/useAuth";
import logo from "../../images/vehica-logo.webp";
import "./Navbar.css";
const Navbar = () => {
  const { user, handleLogOut } = useAuth();
  return (
    <nav className="navbar navbar-expand-lg navbar-light  sticky-top">
      <div className="container-fluid">
        <img
          style={{ width: "200px" }}
          className="img-fluid"
          src={logo}
          alt=""
        />
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ms-5 mb-lg-0">
            <li className="nav-item">
              <NavLink
                className="Nav_link"
                to="/home"
                activeClassName="selected"
              >
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                className="Nav_link"
                to="/explore"
                activeClassName="selected"
              >
                Explore
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                className="Nav_link"
                to="/about"
                activeClassName="selected"
              >
                About
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                className="Nav_link"
                to="/contact"
                activeClassName="selected"
              >
                Contact
              </NavLink>
            </li>

            <br />

            <br />
            {user.email && (
              <Link to="/dashboard">
                <li  className="me-3 ms-3">
                  Dashboard
                </li>
              </Link>
            )}
            <li className="nav-item nav-text text-white">
              {user?.displayName}
            </li>
            {user.photoURL && user.email && (
              <img
                src={user?.photoURL}
                height="40px"
                style={{ borderRadius: "50%" }}
                width="40px"
                alt=""
                className="pull-left img-circle login"
              />
            )}
          </ul>
          {user.email ? (
            <div>
              <li
                onClick={handleLogOut}
                className="position-absolute text-white top-50 end-0 translate-middle-y mx-5"
                data-bs-toggle="tooltip"
                data-bs-placement="bottom"
              >
                Logout
              </li>
            </div>
          ) : (
            <NavLink to="/loginform">
              <li
                className=" position-absolute top-50 end-0 translate-middle-y mx-5"
                data-bs-toggle="tooltip"
                data-bs-placement="bottom"
              >
                Login
              </li>
            </NavLink>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
