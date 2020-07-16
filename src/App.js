import React from 'react';
import {Redirect, BrowserRouter as Router, Route} from 'react-router-dom';

import HomePage from "./HomePage";
import LoginPage from "./LoginPage";
import './App.css';


function App() {
  return (
      <Router>
          <Route exact path="/homepage" component={HomePage} />
          <Route exact path="/login" component={LoginPage} />
          <Redirect to='/login' from='/' />
      </Router>
  );
}

export default App;
