import React, { useState, useEffect } from 'react';
import axios from "axios";
import {Route, Routes, NavLink} from "react-router-dom";
import useToggle from "../hooks/useToggle";
import { productArray } from "../initialValues/initialValues";
import AddProduct from "./AddProduct";
import Product from "./Product";
import "../styles/Products.css"


const Products = props => {
    const [products, setProducts] = useState(productArray);
    const [ isNorthToggled, {toggle: toggleNorth}] = useToggle(false);
    const [ isSouthToggled, {toggle: toggleSouth}] = useToggle(false);
    const [ isCentralToggled, {toggle: toggleCentral}] = useToggle(false);



    return (
        <div>
            <div className="regions">
                <h1>Regions</h1>
                <div className="locations">
                    <h3 onClick={toggleNorth}>North Africa</h3>
                    <h3 onClick={toggleSouth}>Central Africa</h3>
                    <h3 onClick={toggleCentral}>South Africa</h3>
                </div>
                <div className="products">
                    {
                        isNorthToggled &&
                        products.map((product, i) => {
                            return (product.location === "North Africa") && <Product key={i} product={product}/>
                        })
                    }
                </div>
                <div className="products">
                    {
                        isCentralToggled &&
                        products.map((product, i) => {
                            return (product.location === "Central Africa") && <Product key={i} product={product}/>
                        })
                    }
                </div>
                <div className="products">
                    {
                        isSouthToggled &&
                        products.map((product, i) => {
                            return (product.location === "South Africa") && <Product key={i} product={product}/>
                        })
                    }
                </div>
            </div>
        </div>
    );
};

export default Products;


















































