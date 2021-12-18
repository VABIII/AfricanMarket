import React, { useState } from 'react';
import axios from "axios";
import {signupInitialValues} from "../initialValues/initialValues";


const SignUp = () => {
    const [values, setValues] = useState(signupInitialValues);

    const addNewUser = () => {
        axios.post("", values)
            .then(res => {
                const user = res.data;
                console.log(user);
                }
            )
            .catch(err => {
                console.error(err);
            })
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





    return (
        <div>

            <h1>Sign Up</h1>

        </div>
    );
};

export default SignUp;

















































