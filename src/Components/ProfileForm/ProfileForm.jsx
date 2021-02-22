import React from "react";
import "./ProfileForm.css";

const ProfileForm = () => {
    return (
        <div className="ProfileForm">
            <div className="form-container">
                <h1>Profile</h1>
                <form action="">
                    <label htmlFor="">Username</label>
                    <p>SMasters</p>

                    <div className="input-group">
                        <label htmlFor="firstname">First Name</label>
                            <br/>
                        <input name="firstname" id="firstname" type="text"/>
                    </div>

                    <div className="input-group">
                        <label htmlFor="lastname">Last Name</label>
                            <br/>
                        <input name="lastname" id="lastname" type="text"/>
                    </div>

                    <div className="input-group">
                        <label htmlFor="email">Email</label>
                            <br/>
                        <input name="email" id="email" type="email"/>
                    </div>

                    <div className="input-group">
                        <label htmlFor="confirmpassword">Confirm password</label>
                            <br/>
                        <input name="confirmpassword" id="confirmpassword" type="password"/>
                    </div>

                    <div className="container">
                        <button className="btn btn-primary">Save Changes</button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default ProfileForm;