import React from 'react';
import { Route, Navigate } from "react-router-dom";
import Products from "./Products";
import UserProfile from "./UserProfile";

export const ProductsPrivateRoute = () => {
    const token = localStorage.getItem("token");

    return token ? <Products/> : <Navigate to="/login"/>
};

export const UserPrivateRoute = () => {
    const token = localStorage.getItem("token");

    return token ? <UserProfile/> : <Navigate to="/login"/>
};

export function LogoutPrivateRoute({children, ...rest}) {
    const token = localStorage.getItem("token");

    return token ? children  : <Navigate to="/login" />;
}













































