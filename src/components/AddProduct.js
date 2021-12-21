import React, { useState } from 'react';
import axios from "axios";
import "../styles/AddProduct.css"


export const newProductInitialValues = {
    productName: "",
    productDescription: "",
    productPrice: "",
    location: ""
};

const AddProduct = () => {
    const [values, setValues] = useState(newProductInitialValues);
    console.log(values);


    const addNewProduct = newProd => {
        axios.post("", newProd)
            .then(res => {
                console.log(res)
            })
            .catch(err => {
                console.error(err)
            });
    };


    const onChange = evt => {
        const name = evt.target.name;
        const value = evt.target.value;

        setValues({
            values,
            [name]: value
        });
    };

    const onSubmit = evt => {
        evt.preventDefault()
            addNewProduct(values);
        // TODO: update product application state to reflect change to db
        // TODO: push to a location after submission
    };


    return (
        <div className="add-product-container">
            <div className="product-form-title">
                <h1>Add Product</h1>
            </div>
            <div className="add-product-form">
                <form onSubmit={onSubmit}>
                    <label>Product Name:&nbsp;</label>
                    <input
                        type="text"
                        name="productName"
                        value={values.productName}
                        onChange={onChange}
                    />
                    <label>&nbsp;Price:&nbsp;</label>
                    <input
                        type="text"
                        name="productPrice"
                        value={values.productPrice}
                        onChange={onChange}
                    />
                    <label>&nbsp;Product Description:&nbsp;</label>
                    <input
                        type="text"
                        name="productDescription"
                        value={values.productDescription}
                        onChange={onChange}
                    />
                    <label>&nbsp;Location:&nbsp;</label>
                    <input
                        type="text"
                        name="location"
                        value={values.location}
                        onChange={onChange}
                    />
                    &nbsp;<button>Add</button>
                </form>
                <button onClick={() => window.location.href="/products"}>Cancel</button>
            </div>
        </div>
    );
};

export default AddProduct;

















































