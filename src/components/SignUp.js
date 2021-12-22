import React, { useState } from 'react';
import axios from "axios";
import {signupInitialValues, signUpErrors} from "../initialValues/initialValues";
import { SignUpHere, SignUpBoxes, H1Color, SUImg } from '../styled components/SignUpElements';

// TODO: Add a welcome message or something to greet new user
// TODO: Position signup inputs and style page
// TODO: Uncomment addNewUser() in onSubmit


const SignUp = () => {
    const [values, setValues] = useState(signupInitialValues);
    const [user, setUser] = useState(signupInitialValues);
    const [errors,setErrors] = useState(signUpErrors);
    console.log(user)

    const addNewUser = () => {
        axios.post("", user)
            .then(res => {
                const user = res.data;
                console.log(user);
                setUser(user);
                })
            .catch(err => {
                // console.error(err);
                setErrors(err.response.data)
            });
    };

    const onChange = evt => {
        const name = evt.target.name;
        const value = evt.target.value;
        setValues({
            ...values,
            [name]: value
        });
        console.log(values);
    };

    const onSubmit = evt => {
        evt.preventDefault();
        setUser(values);
        // addNewUser();
    };


    return (
        <div>
            <div>
                <H1Color>
                    Join now to experience the greatest things Africa can offer!
                </H1Color>
            </div>
            <SUImg src='http://voxdev.org/sites/default/files/cover_images/casaburi_20nov_0.jpg' alt='African Market'/>
            <SignUpHere>
            <div className="signup-form-container">
                <h1>Sign Up</h1>
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
                            type="text"
                            name="password"
                            value={values.password}
                            onChange={onChange}
                        />
                    </SignUpBoxes>
                    <button>Submit</button>
                </form>
                <p>{errors.error}</p>
            </div>
            </SignUpHere>
        </div>
    );
};

export default SignUp;

















































