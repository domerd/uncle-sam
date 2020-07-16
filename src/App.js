import React from 'react';
import {Redirect, BrowserRouter as Router, Route} from 'react-router-dom';

import HomePage from "./HomePage";
import LoginPage from "./LoginPage";
import './App.css';
import {Switch} from "react-router";
import 'antd/dist/antd.css';

const App = () => {
  return (
      <Router>
          <Switch>
            <Route exact path="/homepage" component={HomePage} />
            <Route exact path="/login" component={LoginPage} />
            <Redirect to='/login' from='/' />
          </Switch>
      </Router>
  );
}

export default App;
