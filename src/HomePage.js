/**
 * Created by omerdoron on 16/07/2020.
 */

import React, { useEffect } from 'react';
import logo from './logo.svg';
import { getFarmers } from './actions';
import ConfigModal from './ConfigModal';

const HomePage = () => {
    useEffect(() => {
        getFarmers();
    }, []);

    return (
        <div>
            <ConfigModal />
            <img src={logo} className="App-logo" alt="logo" />
          This is the home page
        </div>
    );
};

export default HomePage;
