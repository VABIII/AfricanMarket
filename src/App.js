import React, {useState, useEffect} from "react";
import {Route} from "react-router-dom";
import './App.css';
import Header from "./components/Header";
import Login from "./components/Login";
import Logout from "./components/Logout";
import Home from "./components/Home";
import Product from "./components/Product";
import Products from "./components/Products";

function App() {


  return(
      <div className="app-container">
        <h1>App</h1>
        <Home/>
        <Logout/>
        <Login/>
        <Product/>
        <Products/>
      </div>
  )
}

export default App;
