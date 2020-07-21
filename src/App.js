import React, { useEffect, useState, useCallback } from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import { useHistory } from 'react-router';

import { Button, Layout, Popover } from 'antd';
import { LogoutOutlined } from '@ant-design/icons';
import HomePage from './HomePage';
import UserStore from './UserStore';
import RoadsStore from './Roads/RoadsStore';
import LoginPage, { JWT_TOKEN_KEY } from './LoginPage';
import { addJWTToHeader, validateToken } from './Login/actions';
import 'antd/dist/antd.css';
import './App.sass';
import CountryStore from './CountryStore';
import FarmerStore from './FarmerStore';
import AdjacencyListStore from './AdjacencyListStore';
import ResultStore from './ResultStore';

const App = () => {
    const [logged, setLogged] = useState(false);

    const history = useHistory();

    const redirectToLogin = useCallback(() => {
        history.push('/login');
    }, [history]);

    const checkLoggedIn = useCallback(() => {
        // eslint-disable-next-line no-undef
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

    const LogOff = () => (
        <Popover content="Log Off" className="log-off-button" placement="bottomRight">
            <Button
                icon={<LogoutOutlined />}
                onClick={() => {
                    // eslint-disable-next-line no-undef
                    localStorage.removeItem(JWT_TOKEN_KEY);
                    setLogged(false);
                    redirectToLogin();
                }}
                shape="circle"
            />
        </Popover>
    );

    return (
        <Switch>
            {logged && (
                <Layout>
                    <Layout.Header>
                        <img src="/farmer.png" className="header-logo" alt="logo" />
                        <p className="header-app-name">Uncle Sam</p>
                        <LogOff />
                    </Layout.Header>
                    <Layout.Content>
                        <UserStore>
                            <CountryStore>
                                <FarmerStore>
                                    <AdjacencyListStore>
                                        <ResultStore>
                                            <RoadsStore>
                                                <Route exact path="/homepage" component={HomePage} />
                                            </RoadsStore>
                                        </ResultStore>
                                    </AdjacencyListStore>
                                </FarmerStore>
                            </CountryStore>
                        </UserStore>
                    </Layout.Content>
                </Layout>
            )}
            <Route exact path="/login" render={renderLogin} />
            <Redirect to="/homepage" from="/" />
        </Switch>
    );
};

export default App;
