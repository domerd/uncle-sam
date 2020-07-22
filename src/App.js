import React, {
    useEffect, useState, useCallback, useContext,
} from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import { useHistory } from 'react-router';

import {
    Button, Layout, Popover,
} from 'antd';
import { LogoutOutlined } from '@ant-design/icons';
import HomePage from './HomePage';
import UserStore from './UserStore';
import RoadsStore from './Roads/RoadsStore';
import LoginPage, { JWT_TOKEN_KEY } from './LoginPage';
import { addJWTToHeader, validateToken } from './Login/actions';
import 'antd/dist/antd.css';
import './App.sass';
import CountryStore, { CountryStoreContext } from './CountryStore';
import FarmerStore from './FarmerStore';
import AdjacencyListStore from './AdjacencyListStore';
import ResultStore from './ResultStore';
import ConfigCountryModal from './ConfigCountryModal';
import CountrySelect from './CountrySelect';

const App = () => {
    const [logged, setLogged] = useState(false);

    const history = useHistory();

    const redirectToLogin = useCallback(() => {
        if (window.location.pathname !== '/login') {
            history.push('/login');
        }
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
        <>
            <Switch>
                {logged && (
                    <Layout>
                        <UserStore>
                            <CountryStore>
                                <Layout.Header>
                                    <img src="/lester_white_logo.png" className="header-logo" alt="logo" />
                                    <ConfigCountryModal />
                                    <div className="header-options">
                                        <CountrySelect />
                                        <LogOff />
                                    </div>
                                </Layout.Header>
                                <Layout.Content>
                                    <FarmerStore>
                                        <AdjacencyListStore>
                                            <ResultStore>
                                                <RoadsStore>
                                                    <Route exact path="/homepage" component={HomePage} />
                                                </RoadsStore>
                                            </ResultStore>
                                        </AdjacencyListStore>
                                    </FarmerStore>

                                </Layout.Content>
                                <Layout.Footer>
                                    By spice
                                    <img src="/farmer.png" className="Team-logo" alt="spice logo" />
                                </Layout.Footer>
                            </CountryStore>
                        </UserStore>
                    </Layout>
                )}
                {!logged && <Route exact path="/login" render={renderLogin} />}
            </Switch>
            <Redirect to="/homepage" from="/" />
        </>
    );
};

export default App;
