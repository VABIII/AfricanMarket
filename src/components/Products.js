import React, { useState, useEffect } from 'react';
import axios from "axios";
import {Route, Routes, NavLink} from "react-router-dom";
import { productArray } from "../initialValues/initialValues";
import AddProduct from "./AddProduct";
import Product from "./Product";
import "../styles/Products.css"


const Products = () => {
    const [products, setProducts] = useState(productArray);


    // useEffect(() => {
    //     axios.get("")
    //         .then(res => {
    //             setProducts(res.data);
    //         })
    //         .catch(err => {
    //             console.error(err);
    //         })
    //
    // }, []);

    return (
        <div className="products-container">
            <div className="products-title">
                <strong><h1>Products</h1></strong>
            </div>
            <div>
                <nav>
                    <strong><NavLink to="/products/add-product">Add New Product</NavLink></strong>
                </nav>
                <Routes>
                    <Route path="/add-product" element={<AddProduct/>}/>
                </Routes>
            </div>
            <div className="products">
                {
                    products.map((product, i) => {
                        return <Product key={i} product={product}/>
                    })
                }
            </div>
        </div>
    );
};

export default Products;

















































