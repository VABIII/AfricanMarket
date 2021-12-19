import React from 'react';
import { Route, Navigate } from "react-router-dom";
import Products from "./Products";
import UserProfile from "./UserProfile";
import Logout from "./Logout";

export const ProductsPrivateRoute = () => {
    const token = localStorage.getItem("token");

    return token ? <Products/> : <Navigate to="/login"/>
};

export const UserPrivateRoute = () => {
    const token = localStorage.getItem("token");

    return token ? <UserProfile/> : <Navigate to="/login"/>
};

export const LogoutPrivateRoute = () => {
    const token = localStorage.getItem("token");

    return token ? <Logout/> : <Navigate to="/login"/>;
};

export function AboutPrivateRoute({children, ...rest}) {
    const token = localStorage.getItem("token");

    return token ? children  : <Navigate to="/login" />;
}













































