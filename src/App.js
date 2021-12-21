import React from "react";
import { Route, Routes } from "react-router-dom";
import './styles/App.css';
import Header from "./components/Header";
import Login from "./components/Login";
import Logout from "./components/Logout";
import Home from "./components/Home";
import Products from "./components/Products";
import SignUp from "./components/SignUp";
import ErrorPage from "./components/ErrorPage";
import UserProfile from "./components/UserProfile";
import About from "./components/About";
import {ProductsPrivateRoute, UserPrivateRoute,
    LogoutPrivateRoute}
    from "./components/PrivateRoute";
import Footer from "./components/Footer";


function App() {

  return(
      <div className="app-container">
        <Header/>
        <Routes>
            <Route exact path="/products/*" element={<ProductsPrivateRoute/>}>
                <Route path="" element={<UserProfile/>}/>
            </Route>

            <Route path='/user' element={<UserPrivateRoute/>}>
                <Route path="" element={<Products/>}/>
            </Route>
            {/*Use the format below if you need to pass props to the component*/}
            <Route
                path="/logout/*"
                element={
                    <LogoutPrivateRoute>
                        <Logout/>
                    </LogoutPrivateRoute>
                }
            />
          <Route path="/about" element={<About/>}/>
          <Route path="/login" element={<Login/>}/>
          <Route path="/signup" element={<SignUp/>}/>
          <Route path="/" element={<Home/>}/>
          <Route path="*" element={<ErrorPage/>}/>
        </Routes>
      </div>
  )
}

export default App;





