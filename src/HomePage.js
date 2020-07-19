/**
 * Created by omerdoron on 16/07/2020.
 */

import React, { useContext, useEffect, useState } from 'react';
import logo from './logo.svg';
import { getFarmers } from './actions';
import ConfigModal from './ConfigModal';
import { CountryStoreContext } from './CountryStore';
import './HomePage.sass';
import FarmerTable from './FarmerTable';

const HomePage = () => {
    const { getDefaultCountryName } = useContext(CountryStoreContext);
    const [country, setCountry] = useState(undefined);

    useEffect(() => {
        setCountry(getDefaultCountryName());
    }, [getDefaultCountryName]);

    return (
        <div className="homepage">
            <ConfigModal />
            <div id="country text">
                <div id="a"  style={{ display: 'inline'}}>Here you can config all the deliveries FROM </div>
                <div id="b"  style={{ display: 'inline', color: 'red'}}>{country}</div>
            </div>
            <FarmerTable />
        </div>
    );
};

export default HomePage;
