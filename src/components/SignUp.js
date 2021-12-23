import React, { useState, useEffect } from 'react';
import axios from 'axios';
import * as yup from 'yup';
import { signupSchema } from '../validations/schemas';
import {
	signupInitialValues,
	initialSignupFormErrors,
	signUpErrors,
	initialFormDisabled,
} from '../initialValues/initialValues';
import {
	SignUpHere,
	SignUpBoxes,
	H1Color,
	SUImg,
} from '../styled components/SignUpElements';
import '../styles/Disabled.css';

// TODO: Add a welcome message or something to greet new user
// TODO: Position signup inputs and style page
// TODO: Uncomment addNewUser() in onSubmit

const SignUp = () => {
	const [values, setValues] = useState(signupInitialValues);
	const [user, setUser] = useState(signupInitialValues);
	const [signupFormErrors, setSignupFormErrors] = useState(
		initialSignupFormErrors
	);
	const [disabled, setDisabled] = useState(initialFormDisabled);
	const [errors, setErrors] = useState(signUpErrors);
	// console.log(user);

	const addNewUser = () => {
		axios
			.post('', user)
			.then((res) => {
				const user = res.data;
				console.log(user);
				setUser(user);
			})
			.catch((err) => {
				// console.error(err);
				setErrors(err.response.data);
			});
	};

	const validateSignup = (name, value) => {
		yup
			.reach(signupSchema, name)
			.validate(value)
			.then(() =>
				setSignupFormErrors({
					...signupFormErrors,
					[name]: '',
				})
			)
			.catch((err) =>
				setSignupFormErrors({
					...signupFormErrors,
					[name]: err.errors[0],
				})
			);
	};

	const onChange = (evt) => {
		const { name, value } = evt.target;

		validateSignup(name, value);
		setValues({
			...values,
			[name]: value,
		});
		// console.log(values);
	};

	const onSubmit = (evt) => {
		evt.preventDefault();
		setUser(values);
		// addNewUser();
	};

	useEffect(() => {
		signupSchema.isValid(values).then((valid) => setDisabled(!valid));
	}, [values]);

	return (
		<div>
			<div>
				<H1Color>
					Join now to experience the greatest things Africa can offer!
				</H1Color>
			</div>
			<SUImg
				src="http://voxdev.org/sites/default/files/cover_images/casaburi_20nov_0.jpg"
				alt="African Market"
			/>
			<SignUpHere>
				<div className="signup-form-container">
					<h1>Sign Up</h1>
					{/* 
                    // username: '',
                    // 	firstName: '',
                    // 	lastName: '',
                    // 	businessName: '',
                    // 	jobTitle: '',
                    // 	location: '',
                    // 	avatarImg: '',
                    // 	password: '',
                    */}
					<div>
						<div>{signupFormErrors.username}</div>
						<div>{signupFormErrors.firstName}</div>
						<div>{signupFormErrors.lastName}</div>
						<div>{signupFormErrors.businessName}</div>
						<div>{signupFormErrors.jobTitle}</div>
						<div>{signupFormErrors.location}</div>
						<div>{signupFormErrors.avatarImg}</div>
						<div>{signupFormErrors.password}</div>
					</div>
				</div>
				<div className="signup-form">
					<form onSubmit={onSubmit}>
						<SignUpBoxes>
							<label>Username:&nbsp;</label>
							<input
								type="text"
								name="username"
								value={values.username}
								onChange={onChange}
							/>
						</SignUpBoxes>
						<SignUpBoxes>
							<label>First Name:&nbsp;</label>
							<input
								type="text"
								name="firstName"
								value={values.firstName}
								onChange={onChange}
							/>
						</SignUpBoxes>
						<SignUpBoxes>
							<label>Last Name:&nbsp;</label>
							<input
								type="text"
								name="lastName"
								value={values.lastName}
								onChange={onChange}
							/>
						</SignUpBoxes>
						<SignUpBoxes>
							<label>Business Name:&nbsp;</label>
							<input
								type="text"
								name="businessName"
								value={values.businessName}
								onChange={onChange}
							/>
						</SignUpBoxes>
						<SignUpBoxes>
							<label>Job Title:&nbsp;</label>
							<input
								type="text"
								name="jobTitle"
								value={values.jobTitle}
								onChange={onChange}
							/>
						</SignUpBoxes>
						<SignUpBoxes>
							<label>Location:&nbsp;</label>
							<input
								type="text"
								name="location"
								value={values.location}
								onChange={onChange}
							/>
						</SignUpBoxes>
						<SignUpBoxes>
							<label>Profile Picture:&nbsp;</label>
							<input
								type="text"
								name="avatarImg"
								value={values.avatarImg}
								onChange={onChange}
							/>
						</SignUpBoxes>
						<SignUpBoxes>
							<label>Password:&nbsp;</label>
							<input
								type="password"
								name="password"
								value={values.password}
								onChange={onChange}
							/>
						</SignUpBoxes>
						<button disabled={disabled}>Submit</button>
					</form>
					<p>{errors.error}</p>
				</div>
			</SignUpHere>
		</div>
	);
};

export default SignUp;
