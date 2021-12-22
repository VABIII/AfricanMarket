import React, {useState} from 'react';
import axios from "axios";
import {loginInitialValues, signUpErrors} from "../initialValues/initialValues";
import {LogInDesign, H1Color, LIImg} from "../styled components/LoginElements"
// TODO: delete setToken and wlh and uncomment login()
// TODO: Add a welcome message or something to greet user
// TODO: Position login inputs and style page


const Login = () => {
    const [values, setValues] = useState(loginInitialValues);
    const [error, setError] = useState(signUpErrors);
    const setToken = () => localStorage.setItem("token", "token");


    const login = credentials => {
        axios.post(``, credentials)
            .then( res => {
                const token = res.data.token;
                localStorage.setItem("token", token);
                window.location.href = "/products";
            })
            .catch(err => {
                setError(err.response.data);
            });
    };

    const onChange = evt => {
        const name = evt.target.name;
        const value = evt.target.value;

        setValues({
            ...values,
            [name]: value
        });
    };

    const onSubmit = evt => {
        evt.preventDefault();
        // login(values);
        setToken();
        window.location.href="/products";
    };

    return (
        <div className="login-container">
            <div className="login-title">
                <H1Color> Login now to see what we have to offer! </H1Color>
            </div>
            <LIImg src='https://www.nycgo.com/images/venues/2392/harlemflea_51f__large.jpg' alt='market'/>
            <LogInDesign>
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
            </LogInDesign>
        </div>
    );
};

export default Login;

















































