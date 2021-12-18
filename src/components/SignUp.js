import React, { useState } from 'react';
import axios from "axios";
import {signupInitialValues} from "../initialValues/initialValues";


const SignUp = () => {
    const [values, setValues] = useState(signupInitialValues);
    const [user, setUser] = useState({});
    console.log(user)

    const addNewUser = () => {
        axios.post("", user)
            .then(res => {
                const user = res.data;
                console.log(user);
                }
            )
            .catch(err => {
                console.error(err);
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
    };


    return (
        <div>
            <div className="signup-form-container">
                <h1>Sign Up</h1>
            </div>
            <div className="signup-form">
                <form onSubmit={onSubmit}>
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
                        <label>First Name:&nbsp;</label>
                        <input
                            type="text"
                            name="firstName"
                            value={values.firstName}
                            onChange={onChange}
                        />
                    </div>
                    <div>
                        <label>Last Name:&nbsp;</label>
                        <input
                            type="text"
                            name="lastName"
                            value={values.lastName}
                            onChange={onChange}
                        />
                    </div>
                    <div>
                        <label>Business Name:&nbsp;</label>
                        <input
                            type="text"
                            name="businessName"
                            value={values.businessName}
                            onChange={onChange}
                        />
                    </div>
                    <div>
                        <label>Job Title:&nbsp;</label>
                        <input
                            type="text"
                            name="jobTitle"
                            value={values.jobTitle}
                            onChange={onChange}
                        />
                    </div>
                    <div>
                        <label>Profile Picture:&nbsp;</label>
                        <input
                            type="text"
                            name="avatarImg"
                            value={values.avatarImg}
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
                    <button>Submit</button>
                </form>
            </div>
        </div>
    );
};

export default SignUp;

















































