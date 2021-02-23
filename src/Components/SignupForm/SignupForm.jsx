import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import "./SignupForm.css";

const SignupForm = ({ signup }) => {
    const history = useHistory();
    const INITIAL_STATE = {
        username: "",
        password: "",
        firstName: "",
        lastName: "",
        email: ""
    }
    const [formData, setFormData] = useState(INITIAL_STATE);

    const handleChange = (e) => {
        const {name, value} = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        signup(formData);
        history.push("/");
    }

    return (
        <div className="SignupForm">
            <div className="form-container">
                <h1>Sign up</h1>
                <form onSubmit={handleSubmit} >

                    <div className="input-group">
                        <label htmlFor="username">Username</label>
                            <br/>
                        <input name="username" id="username" type="text" onChange={handleChange} value={formData.username} required/>
                    </div>

                    <div className="input-group">
                        <label htmlFor="password">Password</label>
                            <br/>
                        <input name="password" id="password" type="password" onChange={handleChange} value={formData.password} required/>
                    </div>

                    <div className="input-group">
                        <label htmlFor="firstName">First Name</label>
                            <br/>
                        <input name="firstName" id="firstName" type="text" onChange={handleChange} value={formData.firstName} required/>
                    </div>

                    <div className="input-group">
                        <label htmlFor="lastName">Last Name</label>
                            <br/>
                        <input name="lastName" id="lastName" type="text" onChange={handleChange} value={formData.lastName} required/>
                    </div>

                    <div className="input-group">
                        <label htmlFor="email">Email</label>
                            <br/>
                        <input name="email" id="email" type="email" onChange={handleChange} value={formData.email} required/>
                    </div>

                    <div className="container">
                        <button className="btn btn-primary">Sign up</button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default SignupForm;