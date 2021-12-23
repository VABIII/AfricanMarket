import React, { useState } from 'react';
import axios from "axios";
import "../styles/AddProduct.css";
import {newProductInitialValues} from "../initialValues/initialValues";

// TODO: update product application state to reflect change to db
// TODO: push to a location after submission
// TODO: find a spot for add button that works with --- will this change be on this page or the products page? -Lorenzo

// i think it should be added to the top of the page -- lorenzo. 



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
    };

    return (
        <div className="add-product-container">
            <div className="product-form-title">
                <h1>Add Product</h1>
            </div>
            <div className="add-product-form">
                <form>
                    <strong><label>Product Name:&nbsp;</label></strong>
                    <input
                        type="text"
                        name="productName"
                        value={values.productName}
                        onChange={onChange}
                    />
                    <strong><label>&nbsp;Price:&nbsp;</label></strong>
                    <input
                        type="text"
                        name="productPrice"
                        value={values.productPrice}
                        onChange={onChange}
                    />
                    <strong><label>&nbsp;Description:&nbsp;</label></strong>
                    <input
                        type="text"
                        name="productDescription"
                        value={values.productDescription}
                        onChange={onChange}
                    />
                    <strong><label>&nbsp;Location:&nbsp;</label></strong>
                    <input
                        type="text"
                        name="location"
                        value={values.location}
                        onChange={onChange}
                    />
                    &nbsp;
                </form>
                <div>
                    <button onClick={onSubmit}>Add</button>
                    <button onClick={() => window.location.href="/products"}>Cancel</button>
                </div>
                </div>
        </div>
    );
};

export default AddProduct;

















































