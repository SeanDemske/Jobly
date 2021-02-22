import React from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.css";

const renderLoggedOutNav = () => {
  return (
    <>
      <span className="nav-left">
        <NavLink className="nav-link" to="/">Jobly</NavLink>
      </span>
      <span className="nav-right">
        <NavLink className="nav-link" to="/login">Login</NavLink>
        <NavLink className="nav-link" to="/signup">Signup</NavLink>
      </span>
    </>
  );
}

const renderLoggedInNav = () => {
  return (
    <>
      <span className="nav-left">
        <NavLink className="nav-link" to="/">Jobly</NavLink>
      </span>
      <span className="nav-right">
        <NavLink className="nav-link" to="/companies">Companies</NavLink>
        <NavLink className="nav-link" to="/jobs">Jobs</NavLink>
        <NavLink className="nav-link" to="/profile">Profile</NavLink>
        <NavLink className="nav-link" to="/">Logout</NavLink>
      </span>
    </>
  );
}

const HomeNavbar = () => {
    return (
      <nav className="HomeNavbar">
        {renderLoggedInNav()}
      </nav>
  );
}

export default HomeNavbar;