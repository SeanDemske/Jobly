import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import UserContext from "../../Context/UserContext";
import "./Navbar.css";

const HomeNavbar = ({ logout }) => {
  const { currentUser } = useContext(UserContext);

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
          <NavLink className="nav-link" to="/" onClick={logout} >Logout ({currentUser.username})</NavLink>
        </span>
      </>
    );
  }

  return (
    <nav className="HomeNavbar">
      {currentUser ? renderLoggedInNav() : renderLoggedOutNav()}
    </nav>
  );

}

export default HomeNavbar;