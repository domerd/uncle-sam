/**
 * Created by omerdoron on 16/07/2020.
 */

import React, { useContext, useEffect, useState } from 'react';
import ConfigModal from './ConfigModal';
import { CountryStoreContext } from './CountryStore';
import './HomePage.sass';
import FarmerTable from './FarmerTable';
import RoadStatus from './RoadStatus';
import ReactJson from 'react-json-view';

const HomePage = () => {
    const { getDefaultCountryName } = useContext(CountryStoreContext);
    const [country, setCountry] = useState(undefined);
    const [result, setResult] = useState({});

    useEffect(() => {
        setCountry(getDefaultCountryName());
    }, [getDefaultCountryName]);

    return (
        <div className="homepage">
            <div className="config-line">
                <ConfigModal />
                <p>
                    Here you can config all the deliveries in
                    {' '}
                    {country}
                </p>
            </div>
            <div className="county-container">
                <RoadStatus />
                <FarmerTable resultState={{ result, setResult }} />
                <ReactJson country={country} name="Paths" theme="monokai" src={result} />
            </div>
        </div>
    );
};

export default HomePage;
