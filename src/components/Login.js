import React, {useState} from 'react';
import axios from "axios";


export const loginInitialValues = {
    username: "",
    password: ""
};

export const signUpErrors = {
    error: ""
}


const Login = () => {
    const [values, setValues] = useState(loginInitialValues)
    const [error, setError] = useState(signUpErrors)

    const login = creds => {
        axios.post(``, creds)
            .then( () => {
                window.location.href = "/products";
            })
            .catch(err => {
                setError(err.response.data);
            })

    }


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
        login(values);
    };

    return (
        <div className="login-container">
            <div className="login-title">
                <h1>Login</h1>
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

















































