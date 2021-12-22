import React, { useState, useEffect } from 'react';
import axiosWithAuth from "../utils/axiosWithAuth";
import {newUser} from "../initialValues/initialValues";
import "../styles/UserProfile.css"
import styled from 'styled-components';
import {CurrentProfile} from "../styled components/UserProfileElements"


// TODO: Uncomment useEffect and remove dummy data from useState
// TODO: Position user card and finish styling page -- DONE -anything you want done for styling exactly?  - LORENZO


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
        <CurrentProfile className="user-container">
            <div className="user-info">
                <div className="user">
                    <h1 id="user-name">{user.firstName} {user.lastName}</h1>
                    <img id="user-img" src={user.avatarImg} alt="user"/>
                    <p>{user.businessName}</p>
                    <p>{user.jobTitle}</p>
                    <p>{user.location}</p>
                </div>
            </div>
        </CurrentProfile>
    );
};

export default UserProfile;

















































