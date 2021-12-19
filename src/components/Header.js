import React from 'react';
import {Link} from "react-router-dom";
import "../styles/Header.css";


const Header = () => {
    const token = localStorage.getItem("token");

    return (
            <nav className="header-navs">
                <Link id="home" to="/">Home</Link>
                {!token && <Link id="login" to="/login">Login</Link>}
                {!token && <Link id="signup" to="/signup">Sign Up</Link>}
                {token && <Link id="products" to="/products">Products</Link>}
                {token && <Link id="user" to="/user">My Profile</Link>}
                <Link id="about" to="/about">About</Link>
                {token && <Link id="logout" to="/logout">Logout</Link>}
            </nav>
    );
};

export default Header;

















































