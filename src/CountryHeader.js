import React, { useContext, useEffect, useState } from 'react';
import { CountryStoreContext } from './CountryStore';
import './CountryHeader.sass';
import { Tag } from 'antd';

const CountryHeader = () => {
    const { getDefaultCountryName } = useContext(CountryStoreContext);
    const [country, setCountry] = useState(undefined);

    useEffect(() => {
        setCountry(getDefaultCountryName());
    }, [getDefaultCountryName]);

    return (
        <div className="country-container">
            <Tag color="white">
                <h1>{country}</h1>
                <h2>
                    {' '}
                    deliveries
                </h2>
            </Tag>
        </div>
    );
};
export default CountryHeader;
