import React, { useState, useEffect } from 'react';
import axiosWithAuth from "../utils/axiosWithAuth";
import {newUser} from "../initialValues/initialValues";
import "../styles/UserProfile.css"



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
            <h1>{user.firstName} {user.lastName}</h1>
            <img src={user.avatarImg} alt="user"/>
            <p>{user.businessName}</p>
            <p>{user.jobTitle}</p>
            <p>{user.location}</p>
        </div>
    );
};

export default UserProfile;

















































