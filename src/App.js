import React, {useState, useEffect} from "react";
import { Route, Routes } from "react-router-dom";
import './App.css';
import Header from "./components/Header";
import Login from "./components/Login";
import Logout from "./components/Logout";
import Home from "./components/Home";
import Products from "./components/Products";
import SignUp from "./components/SignUp";
import ErrorPage from "./components/ErrorPage";
import Footer from "./components/Footer";

function App() {


  return(
      <div className="app-container">
        <h1>African Market</h1>
        <Header/>
        <Routes>
          <Route path="/logout" element={<Logout/>}/>
          <Route path="/login" element={<Login/>}/>
          <Route path="/products" element={<Products/>}/>
          <Route path="/signup" element={<SignUp/>}/>
          <Route path="/" element={<Home/>}/>
          <Route path="*" element={<ErrorPage/>}/>
        </Routes>
        <Footer/>
      </div>
  )
};

export default App;





