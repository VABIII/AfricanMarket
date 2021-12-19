import React, { useState } from 'react';
import ProductInfo from "./ProductInfo";
import "../styles/Product.css"


const Product = props => {
    const [toggle, setToggle] = useState(false)
    const { product } = props;

    const onClick = () => {
        setToggle(!toggle)
    };

    return (
        <div className="product-container">
            <div className="product-display">
                <h1 onClick={onClick}>{product.productName}</h1>
                <div className="product-info-container">
                    {toggle && <ProductInfo product={product}/>}
                </div>
            </div>

        </div>
    );
};

export default Product;

















































