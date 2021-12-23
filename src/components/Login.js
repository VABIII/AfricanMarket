import React, { useState, useEffect } from 'react';
import axios from 'axios';
import {
	LogInDesign,
	H1Color,
	LIImg,
} from '../styled components/LoginElements';
import * as yup from 'yup';
import { loginSchema } from '../validations/schemas';
import {
	loginInitialValues,
	signUpErrors,
	initialLoginFormErrors,
	initialFormDisabled,
} from '../initialValues/initialValues';
import '../styles/Disabled.css';

// TODO: delete setToken and wlh and uncomment login()
// TODO: Add a welcome message or something to greet user
// TODO: Position login inputs and style page

const Login = () => {
	const [values, setValues] = useState(loginInitialValues);
	const [error, setError] = useState(signUpErrors);
	const [loginFormErrors, setLoginFormErrors] = useState(
		initialLoginFormErrors
	);
	const [disabled, setDisabled] = useState(initialFormDisabled);
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

	useEffect(() => {
		loginSchema.isValid(values).then((valid) => setDisabled(!valid));
	}, [values]);

	return (
		<div className="login-container">
			<div className="login-title">
				<H1Color> Login now to see what we have to offer! </H1Color>
			</div>
			<LIImg
				src="https://www.nycgo.com/images/venues/2392/harlemflea_51f__large.jpg"
				alt="market"
			/>
			<LogInDesign>
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
						<button disabled={disabled}>Login</button>
					</form>
				</div>
			</LogInDesign>
		</div>
	);
};

export default Login;
