/**
 * Created by omerdoron on 16/07/2020.
 */

import React from 'react';
    import LoginForm from './Login/LoginForm';
import './LoginPage.css';
import {useHistory} from "react-router-dom";
import {addJWTToHeader} from "./Login/actions";

export const JWT_TOKEN_KEY = 'UNCLE_SAM_JWT_TOKEN';

const LoginPage = ({ setLogged }) => {
    const history = useHistory();

    const onLoginSuccess = (jwtToken) => {
        localStorage.setItem(JWT_TOKEN_KEY, jwtToken);
        addJWTToHeader(jwtToken);
        setLogged(true);
        history.goBack();
    };

    return <div className="login-page">
        <img src={'/farmer.png'} className="App-logo" alt="logo" />
        <LoginForm onLoginSuccess={onLoginSuccess} />
    </div>
};

export default LoginPage;
