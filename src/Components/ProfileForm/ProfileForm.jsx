import React, { useContext, useState } from "react";
import UserContext from "../../Context/UserContext";
import useClientUserAuth from "../../Utils/useClientUserAuth";
import JoblyAPI from "../../JoblyAPI";
import "./ProfileForm.css";

const ProfileForm = () => {
    const { currentUser, setCurrentUser } = useContext(UserContext);
    useClientUserAuth(currentUser);

    const INITIAL_STATE = {
        firstName: currentUser.firstName,
        lastName: currentUser.lastName,
        email: currentUser.email,
        password: ""
    }
    const [formData, setFormData] = useState(INITIAL_STATE);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    }

    const handleSubmit = async (e) => {
        e.preventDefault();

        let updatedUser = currentUser;
        try {
            updatedUser = await JoblyAPI.updateUser(formData, currentUser.username);
        } catch(err) {
            return;
        }
        setCurrentUser(updatedUser);
    }

    return (
        <div className="ProfileForm">
            <div className="form-container">
                <h1>Profile</h1>
                <form onSubmit={handleSubmit}>
                    <label htmlFor="">Username</label>
                    <p>{ currentUser.username }</p>

                    <div className="input-group">
                        <label htmlFor="firstName">First Name</label>
                            <br/>
                        <input name="firstName" id="firstName" type="text" value={formData.firstName} onChange={handleChange} />
                    </div>

                    <div className="input-group">
                        <label htmlFor="lastName">Last Name</label>
                            <br/>
                        <input name="lastName" id="lastName" type="text" value={formData.lastName} onChange={handleChange} />
                    </div>

                    <div className="input-group">
                        <label htmlFor="email">Email</label>
                            <br/>
                        <input name="email" id="email" type="email" value={formData.email} onChange={handleChange} />
                    </div>

                    <div className="input-group">
                        <label htmlFor="password">Confirm password</label>
                            <br/>
                        <input name="password" id="password" type="password" value={formData.password} onChange={handleChange} />
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