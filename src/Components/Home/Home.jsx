import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import UserContext from "../../Context/UserContext";
import "./Home.css";

const Home = () => {
    const { currentUser } = useContext(UserContext);

    const renderLoggedOutHome = () => {
        return (
            <div className="btn-group">
                <NavLink className="btn btn-primary" to="/login">Log in</NavLink>
                <NavLink className="btn btn-primary" to="/signup">Sign up</NavLink>
            </div>
        );
    }

    const renderLoggedInHome = () => {
        return (
            <p className="r-1_50 w-600">Welcome Back, {currentUser.username}!</p>
        );
    }


    return (
        <div className="Home">
            <div className="HomeCard">
                <h1>Jobly</h1>
                <p>All the jobs in one, convenient place.</p>
                {currentUser ? renderLoggedInHome() : renderLoggedOutHome()}
            </div>
        </div>
    );
}

export default Home;