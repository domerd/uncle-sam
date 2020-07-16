/**
 * Created by omerdoron on 16/07/2020.
 */

import React, { useEffect, useContext } from 'react';
import logo from './logo.svg';
import { getFarmers } from './actions';
import { RoadsStoreContext } from './RoadsStore';

const HomePage = () => {
    const { roads } = useContext(RoadsStoreContext);
    console.log('In homepage', roads);

    useEffect(() => {
        getFarmers();
    }, []);

    return (
        <div>
            <img src={logo} className="App-logo" alt="logo" />
          This is the home page
        </div>
    );
};

export default HomePage;
