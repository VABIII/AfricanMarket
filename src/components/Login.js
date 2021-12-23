import React, { useState } from 'react';
import axios from 'axios';
import * as yup from 'yup';
import { loginSchema } from '../validations/schemas';
import {
	loginInitialValues,
	signUpErrors,
	initialLoginFormErrors,
} from '../initialValues/initialValues';

// TODO: delete setToken and wlh and uncomment login()
// TODO: Add a welcome message or something to greet user
// TODO: Position login inputs and style page

const Login = () => {
	const [values, setValues] = useState(loginInitialValues);
	const [error, setError] = useState(signUpErrors);
	const [loginFormErrors, setLoginFormErrors] = useState(
		initialLoginFormErrors
	);
	const setToken = () => localStorage.setItem('token', 'token');

	const login = (credentials) => {
		axios
			.post(``, credentials)
			.then((res) => {
				const token = res.data.token;
				localStorage.setItem('token', token);
				window.location.href = '/products';
			})
			.catch((err) => {
				setError(err.response.data);
			});
	};

	const validateLogin = (name, value) => {
		yup
			.reach(loginSchema, name)
			.validate(value)
			.then(() => setLoginFormErrors({ ...loginFormErrors, [name]: '' }))
			.catch((err) =>
				setLoginFormErrors({ ...loginFormErrors, [name]: err.errors[0] })
			);
	};

	const onChange = (evt) => {
		const { name, value } = evt.target;

		validateLogin(name, value);
		setValues({
			...values,
			[name]: value,
		});
	};

	const onSubmit = (evt) => {
		evt.preventDefault();
		// login(values);
		setToken();
		window.location.href = '/products';
	};

	return (
		<div className="login-container">
			<div className="login-title">
				<h1>Login</h1>
			</div>
			<div>
				<div>{loginFormErrors.username}</div>
				<div>{loginFormErrors.password}</div>
			</div>
			<div className="login-form">
				<form onSubmit={onSubmit}>
					<p>{error.error}</p>
					<div>
						<label>Username:&nbsp;</label>
						<input
							type="text"
							name="username"
							value={values.username}
							onChange={onChange}
						/>
					</div>
					<div>
						<label>Password:&nbsp;</label>
						<input
							type="text"
							name="password"
							value={values.password}
							onChange={onChange}
						/>
					</div>
					<button>Login</button>
				</form>
			</div>
		</div>
	);
};

export default Login;
