import React, {useEffect, useState} from 'react';
import {Redirect, Route, Switch} from 'react-router-dom';

import HomePage from "./HomePage";
import LoginPage, {JWT_TOKEN_KEY} from "./LoginPage";
import './App.css';
import {useHistory} from "react-router";
import 'antd/dist/antd.css';
import {addJWTToHeader, validateToken} from "./Login/actions";
import RoadsStore from "./RoadsStore";

const App = () => {
    const [logged, setLogged] = useState(false);

    const history = useHistory();

    const redirectToLogin = () => {
        history.push('/login');
    };

    const checkLoggedIn = () => {
        const jwtToken = localStorage.getItem(JWT_TOKEN_KEY);

        if (!jwtToken) {
            redirectToLogin();
        }
        setLogged(true);
        // validateToken(jwtToken).then(() => {
        //     addJWTToHeader(jwtToken);
        //     setLogged(true);}
        // ).catch(redirectToLogin);
    };

    useEffect(() => {
        checkLoggedIn();
    }, []);

    const renderLogin = (...props) => <LoginPage {...props} setLogged={setLogged} />

  return (
      <Switch>
         {logged && <RoadsStore>
             <Route exact path="/homepage" component={HomePage} />
         </RoadsStore>}
         <Route exact path="/login" render={renderLogin} />
         <Redirect to='/homepage' from='/' />
      </Switch>
  );
}

export default App;
