import React, { useState } from 'react';
import ProductInfo from "./ProductInfo";
import "../styles/Product.css"


const Product = props => {
    const [toggle, setToggle] = useState(false)
    const { product } = props;
    // console.log(product);
    console.log(toggle);

    const onClick = () => {
        setToggle(!toggle)
    };

    return (
        <div className="product-container">
            <div className="product-display">
                <h1 onClick={onClick}>{product.productName}</h1>
                {/*<h4>{product.location}</h4>*/}
                {/*<p>{product.productPrice}</p>*/}
                <div className="product-info-container">
                    {toggle && <ProductInfo product={product}/>}
                </div>
            </div>

        </div>
    );
};

export default Product;

















































