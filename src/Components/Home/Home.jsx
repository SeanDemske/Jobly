import React from "react";
import { NavLink } from "react-router-dom";
import "./Home.css";

const renderLoggedOutHome = () => {
    return (
        <div className="btn-group">
            <NavLink className="btn btn-primary" to="/">Log in</NavLink>
            <NavLink className="btn btn-primary" to="/">Sign up</NavLink>
        </div>
    );
}

const renderLoggedInHome = () => {
    return (
        <p className="r-1_50 w-600">Welcome Back, User!</p>
    );
}

const Home = () => {
    return (
        <div className="Home">
            <div className="HomeCard">
                <h1>Jobly</h1>
                <p>All the jobs in one, convenient place.</p>
                {renderLoggedInHome()}
            </div>
        </div>
    );
}

export default Home;