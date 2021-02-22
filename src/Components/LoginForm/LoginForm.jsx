import React, { useState } from "react";
import "./LoginForm.css";

const LoginForm = () => {
    const INITIAL_STATE = {
        username: "",
        password: ""
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
        <div className="LoginForm">
            <div className="form-container">
                <h1>Log in</h1>
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

                    <div className="container">
                        <button className="btn btn-primary">Log in</button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default LoginForm;