import React, { useState, useEffect } from 'react';
import {Route, Routes, NavLink} from "react-router-dom";
import axiosWithAuth from "../utils/axiosWithAuth";
import useToggle from "../hooks/useToggle";
import { productArray } from "../initialValues/initialValues";
import AddProduct from "./AddProduct";
import Product from "./Product";
import "../styles/Products.css";
import ErrorPage from "./ErrorPage";
import SignUp from "./SignUp";


// TODO: Uncomment out useEffect after endpoint url is added to axios get request

const Products = props => {
    const [products, setProducts] = useState(productArray);
    const [ isNorthToggled, {toggle: toggleNorth, off: northOff}] = useToggle(false);
    const [ isSouthToggled, {toggle: toggleSouth, off: southOff}] = useToggle(false);
    const [ isCentralToggled, {toggle: toggleCentral, off: centralOff}] = useToggle(false);

    // useEffect(() => {
    //     fetchMovies();
    // },[])

    const fetchMovies = () => {
        axiosWithAuth()
            .get(``)
            .then(res => {
                const products = res.data;
                setProducts(products);
            })
            .catch(err => {
                console.error(err);
            });
    };

    const northOnCLick = () => {
        toggleNorth();
        centralOff();
        southOff();
    };

    const centralOnCLick = () => {
        toggleCentral();
        northOff();
        southOff();
    };

    const southOnCLick = () => {
        toggleSouth();
        northOff();
        centralOff();
    };

    return (
        <div>
            <div className="regions">
                <h1>Regions</h1>
                <div className="locations">
                    <h3 onClick={northOnCLick}>North Africa</h3>
                    <h3 onClick={centralOnCLick}>Central Africa</h3>
                    <h3 onClick={southOnCLick}>South Africa</h3>
                </div>

                    <Routes>
                            <Route path="/add" element={<AddProduct/>}/>
                    </Routes>
                <div className="products">
                    {
                        isNorthToggled &&
                        <nav>
                            <NavLink to="/products/add">Add New Product</NavLink>
                        </nav>
                    }
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
                        <nav>
                            <NavLink to="/products/add">Add New Product</NavLink>
                        </nav>
                    }
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
                        <nav>
                            <NavLink to="/products/add">Add New Product</NavLink>
                        </nav>
                    }
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


















































