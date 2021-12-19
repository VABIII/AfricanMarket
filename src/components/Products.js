import React, { useState, useEffect } from 'react';
import axios from "axios";
import {Route, Routes, NavLink} from "react-router-dom";
import useToggle from "../hooks/useToggle";
import { productArray } from "../initialValues/initialValues";
import AddProduct from "./AddProduct";
import Product from "./Product";
import "../styles/Products.css"

// TODO: Style and Position NavLinks & make sure products state is updated to reflect changes made by axios call


const Products = props => {
    const [products, setProducts] = useState(productArray);
    const [ isNAToggled, {toggle: toggleNorthAfrica}] = useToggle(false);
    const [ isCAToggled, {toggle: toggleSouthAfrica}] = useToggle(false);
    const [ isSAToggled, {toggle: toggleCentralAfrica}] = useToggle(false);


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
                <strong><h1 onClick={toggleNorthAfrica}>Products</h1></strong>
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

















































