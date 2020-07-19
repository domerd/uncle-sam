import React, { useEffect, useState, useCallback } from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import { useHistory } from 'react-router';

import HomePage from './HomePage';
import RoadsStore from './RoadsStore';
import LoginPage, { JWT_TOKEN_KEY } from './LoginPage';
import { addJWTToHeader, validateToken } from './Login/actions';
import 'antd/dist/antd.css';
import './App.sass';

const App = () => {
    const [logged, setLogged] = useState(false);

    const history = useHistory();

    const redirectToLogin = useCallback(() => {
        history.push('/login');
    }, [history]);

    const checkLoggedIn = useCallback(() => {
        const jwtToken = localStorage.getItem(JWT_TOKEN_KEY);

        if (!jwtToken) {
            redirectToLogin();
        }

        validateToken(jwtToken).then(() => {
            addJWTToHeader(jwtToken);
            setLogged(true);
        }).catch(redirectToLogin);
    }, [redirectToLogin]);

    useEffect(() => {
        checkLoggedIn();
    }, [checkLoggedIn]);

    const renderLogin = (...props) => <LoginPage {...props} setLogged={setLogged} />;

    return (
        <Switch>
            {logged && (
                <RoadsStore>
                    <Route exact path="/homepage" component={HomePage} />
                </RoadsStore>
            )}
            <Route exact path="/login" render={renderLogin} />
            <Redirect to="/homepage" from="/" />
        </Switch>
    );
};

export default App;
