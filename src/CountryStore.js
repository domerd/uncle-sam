import React, { useEffect, useState } from 'react';
import { getCountries } from './actions';

export const CountryStoreContext = React.createContext();

const CountryStore = ({ children }) => {
    const [countries, setCountries] = useState([]);

    useEffect(() => {
        getCountries().then(({ data }) => {
            setCountries(data);
        });
    }, []);

    return (
        <CountryStoreContext.Provider value={{ countries }}>
            {children}
        </CountryStoreContext.Provider>
    );
};

export default CountryStore;
