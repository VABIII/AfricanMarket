import React, { useState, useEffect } from 'react';
import axios from 'axios';
import * as yup from 'yup';
import { addProductSchema } from '../validations/schemas';
import '../styles/AddProduct.css';
import 'animate.css';
import {
	newProductInitialValues,
	initialAddProductFormErrors,
	initialFormDisabled,
} from '../initialValues/initialValues';

// TODO: update product application state to reflect change to db
// TODO: push to a location after submission
// TODO: find a spot for add button that works with --- will this change be on this page or the products page? -Lorenzo

// i think it should be added to the top of the page -- lorenzo.

const AddProduct = () => {
	const [values, setValues] = useState(newProductInitialValues);
	const [addProductFormErrors, setAddProductFormErrors] = useState(
		initialAddProductFormErrors
	);
	const [disabled, setDisabled] = useState(initialFormDisabled);
	// console.log(values);

	const addNewProduct = (newProd) => {
		axios
			.post('', newProd)
			.then((res) => {
				console.log(res);
			})
			.catch((err) => {
				console.error(err);
			});
	};

	const validateAddProduct = (name, value) => {
		yup
			.reach(addProductSchema, name)
			.validate(value)
			.then(() =>
				setAddProductFormErrors({
					...addProductFormErrors,
					[name]: '',
				})
			)
			.catch((err) =>
				setAddProductFormErrors({
					...addProductFormErrors,
					[name]: err.errors[0],
				})
			);
	};

	const onChange = (evt) => {
		const { name, value } = evt.target;

		validateAddProduct(name, value);
		setValues({
			...values,
			[name]: value,
		});
	};

	const onSubmit = (evt) => {
		evt.preventDefault();
		addNewProduct(values);
	};

	useEffect(() => {
		addProductSchema.isValid(values).then((valid) => {
			setDisabled(!valid);
		});
	}, [values]);

	return (
		<div className="add-product-container">
			<div className="product-form-title">
				<h1 className="animate__animated animate__bounceInRight">
					Add Product
				</h1>
			</div>
			<div className="add-product-form">
				<div className="add-product-errors">
					<div>
						<p>{addProductFormErrors.productName}</p>
					</div>
					<div>
						<p>{addProductFormErrors.productDescription}</p>
					</div>
					<div>
						<p>{addProductFormErrors.productPrice}</p>
					</div>
					<div>
						<p>{addProductFormErrors.location}</p>
					</div>
				</div>
				<form className="animate__animated animate__fadeInDown">
					<label>Name</label>
					<input
						type="text"
						name="productName"
						value={values.productName}
						onChange={onChange}
						placeholder="Enter Name"
					/>
					<label>Price</label>
					<input
						type="text"
						name="productPrice"
						value={values.productPrice}
						onChange={onChange}
						placeholder="Enter Price"
					/>
					<label>Description</label>
					<input
						type="text"
						name="productDescription"
						value={values.productDescription}
						onChange={onChange}
						placeholder="Enter Description"
					/>
					<label>Location</label>
					<input
						type="text"
						name="location"
						value={values.location}
						onChange={onChange}
						placeholder="Enter Location"
					/>
				</form>
				<div className="btns">
					<button className="add" disabled={disabled} onClick={onSubmit}>
						Add
					</button>
					<button
						className="cancel"
						onClick={() => (window.location.href = '/products')}
					>
						Cancel
					</button>
				</div>
			</div>
		</div>
	);
};

export default AddProduct;
