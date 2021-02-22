import React, { useState } from "react";
import "./SignupForm.css";

const SignupForm = () => {
    const INITIAL_STATE = {
        username: "",
        password: "",
        firstname: "",
        lastname: "",
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

    return (
        <div className="SignupForm">
            <div className="form-container">
                <h1>Sign up</h1>
                <form action="">

                    <div className="input-group">
                        <label htmlFor="username">Username</label>
                            <br/>
                        <input name="username" id="username" type="text" onChange={handleChange} value={formData.username}/>
                    </div>

                    <div className="input-group">
                        <label htmlFor="password">Password</label>
                            <br/>
                        <input name="password" id="password" type="password" onChange={handleChange} value={formData.password}/>
                    </div>

                    <div className="input-group">
                        <label htmlFor="firstname">First Name</label>
                            <br/>
                        <input name="firstname" id="firstname" type="text" onChange={handleChange} value={formData.firstname}/>
                    </div>

                    <div className="input-group">
                        <label htmlFor="lastname">Last Name</label>
                            <br/>
                        <input name="lastname" id="lastname" type="text" onChange={handleChange} value={formData.lastname}/>
                    </div>

                    <div className="input-group">
                        <label htmlFor="email">Email</label>
                            <br/>
                        <input name="email" id="email" type="email" onChange={handleChange} value={formData.email}/>
                    </div>

                    <div className="container">
                        <button className="btn btn-primary">Log in</button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default SignupForm;