import React, { useContext, useEffect, useState } from 'react';
import { CountryStoreContext } from './CountryStore';
import './CountryText.sass';
import { Tag } from 'antd';

const SECONDARY_COLOR = '#fee187';

const CountryText = () => {
    const { getDefaultCountryName } = useContext(CountryStoreContext);
    const [country, setCountry] = useState(undefined);

    useEffect(() => {
        setCountry(getDefaultCountryName());
    }, [getDefaultCountryName]);

    return (
        <div id="country-container">
            <Tag style={{ fontSize: 'large', padding: 10 }} color={SECONDARY_COLOR}>
                <h1>{country}</h1>
            </Tag>
        </div>
    );
};
export default CountryText;
