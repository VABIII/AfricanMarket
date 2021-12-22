import React from 'react';
import "../styles/ProductInfo.css"


const ProductInfo = props => {
    const {product} = props;

    return (
        <div className="product-info">
            <p>{product.productDescription}</p>
            <p>{product.location}</p>
            <p>{product.productPrice}</p>
            <img src="https://images.unsplash.com/photo-1594489428504-5c0c480a15fd?ixid=MnwxMj
            A3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=764&q=80" alt="banana"/>
        </div>
    );
};

export default ProductInfo;

















































