import React, { useState, useEffect } from 'react';
import { Route, Routes, NavLink } from 'react-router-dom';
import axiosWithAuth from '../utils/axiosWithAuth';
import useToggle from '../hooks/useToggle';
import { productArray } from '../initialValues/initialValues';
import AddProduct from './AddProduct';
import Product from './Product';
import '../styles/Products.css';
import styled from 'styled-components';

// TODO: Uncomment out useEffect after endpoint url is added to axios get request
// TODO: Find somewhere to put that fucking add new product that doesn't look like dick

const Products = (props) => {
	const [products, setProducts] = useState(productArray);
	const [isNorthToggled, { toggle: toggleNorth, off: northOff }] =
		useToggle(false);
	const [isSouthToggled, { toggle: toggleSouth, off: southOff }] =
		useToggle(false);
	const [isCentralToggled, { toggle: toggleCentral, off: centralOff }] =
		useToggle(false);

	// useEffect(() => {
	//     fetchMovies();
	// },[])

	const fetchMovies = () => {
		axiosWithAuth()
			.get(``)
			.then((res) => {
				const products = res.data;
				setProducts(products);
			})
			.catch((err) => {
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
				<h1 id="regions">Regions</h1>
				<div className="locations">
					<h3 className="region" onClick={northOnCLick}>
						North Africa
					</h3>
					<h3 className="region" onClick={centralOnCLick}>
						Central Africa
					</h3>
					<h3 className="region" onClick={southOnCLick}>
						South Africa
					</h3>
				</div>
			</div>
			<nav>
				<NavLink id="add" to="/products/add">
					Add New Product
				</NavLink>
			</nav>
			<Routes>
				<Route path="/add" element={<AddProduct />} />
			</Routes>
			<div className="products">
				{isNorthToggled &&
					products.map((product, i) => {
						return (
							product.location === 'North Africa' && (
								<Product key={i} product={product} />
							)
						);
					})}
				{isCentralToggled &&
					products.map((product, i) => {
						return (
							product.location === 'Central Africa' && (
								<Product key={i} product={product} />
							)
						);
					})}
				{isSouthToggled &&
					products.map((product, i) => {
						return (
							product.location === 'South Africa' && (
								<Product key={i} product={product} />
							)
						);
					})}
			</div>
		</div>
	);
};

export default Products;
