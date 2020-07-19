import React, { useCallback, useContext, useEffect, useState } from 'react';
import _ from 'lodash';
import { getCountries } from './actions';
import { UserStoreContext } from './UserStore';

export const CountryStoreContext = React.createContext();

const CountryStore = ({ children }) => {
    const [countries, setCountries] = useState([]);
    const { defaultCountry } = useContext(UserStoreContext);

    useEffect(() => {
        getCountries().then(({ data }) => {
            setCountries(data);
        });
    }, []);

    const getDefaultCountryName = useCallback(() => {
        const country = _.find(countries, { country_id: defaultCountry });
        return country ? country.name : undefined;
    }, [countries, defaultCountry]);

    return (
        <CountryStoreContext.Provider value={{ countries, getDefaultCountryName }}>
            {children}
        </CountryStoreContext.Provider>
    );
};

export default CountryStore;
