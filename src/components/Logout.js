import React, { useEffect } from 'react';
import axios from "axios";


const Logout = () => {

    useEffect(() => {
        localStorage.removeItem("token");
        window.location.href="/";
    },[]);

    //TODO: Delete above useEffect and uncomment out useEffect below

    // useEffect(() => {
    //     axios.post("")
    //         .then( () => {
    //             localStorage.removeItem("token");
    //             window.location.href= "/";
    //         })
    //         .catch(err => {
    //             console.error(err);
    //         });
    // },[]);

    return (<div></div>);
};

export default Logout;

















































