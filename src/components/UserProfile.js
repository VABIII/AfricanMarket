import React, { useState, useEffect } from 'react';
import axiosWithAuth from "../utils/axiosWithAuth";
import {newUser} from "../initialValues/initialValues";
import "../styles/UserProfile.css"


// TODO: Uncomment useEffect and remove dummy data from useState
// TODO: Position user card and finish styling page


const UserProfile = () => {
    const [user, setUser] = useState(newUser);

    // useEffect(() => {
    //     axiosWithAuth()
    //         .get('')
    //         .then(res => {
    //             const user = res.data;
    //             setUser(user);
    //         })
    //         .catch(err => {
    //             console.error(err);
    //         })
    // },[]);

    return (
        <div className="user-container">
            <div className="user-info">
                <div className="user">
                    <h1 id="user-name">{user.firstName} {user.lastName}</h1>
                    <img id="user-img" src={user.avatarImg} alt="user"/>
                    <p>{user.businessName}</p>
                    <p>{user.jobTitle}</p>
                    <p>{user.location}</p>
                </div>
            </div>
        </div>
    );
};

export default UserProfile;

















































