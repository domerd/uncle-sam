/**
 * Created by omerdoron on 16/07/2020.
 */

import React from 'react';
import logo from './logo.svg';
import LoginForm from './Login/LoginForm';
import './LoginPage.css';
import {useHistory} from "react-router-dom";

const JWT_TOKEN_KEY = 'UNCLE_SAME_JWT_TOKEN';

const LoginPage = () => {
    const history = useHistory();

    const onLoginSuccess = (jwtToken) => {
        localStorage.setItem(JWT_TOKEN_KEY, jwtToken);
        history.goBack();
    };

    return <div className="login-page">
        <img src={logo} className="App-logo" alt="logo" />
        <LoginForm onLoginSuccess={onLoginSuccess} />
    </div>
};

export default LoginPage;
