import React, {
    useCallback, useContext, useEffect, useState,
} from 'react';
import _ from 'lodash';
import { getFarmers } from './actions';
import { UserStoreContext } from './UserStore';

export const FarmerStoreContext = React.createContext();

const FarmerStore = ({ children }) => {
    const [farmers, setFarmers] = useState([]);
    const { defaultCountry } = useContext(UserStoreContext);

    useEffect(() => {
        getFarmers().then(({ data }) => {
            setFarmers(data);
        });
    }, []);

    const getDefaultCountryFarmers = useCallback(
        () => _.filter(farmers, { country: defaultCountry }),
        [defaultCountry, farmers],
    );

    const getDeliveryWeightById = useCallback((id) => {
        const delivery = _.find(farmers, { id });
        return delivery ? delivery.size : undefined;
    }, [farmers]);

    return (
        <FarmerStoreContext.Provider value={{ farmers, getDefaultCountryFarmers, getDeliveryWeightById }}>
            {children}
        </FarmerStoreContext.Provider>
    );
};

export default FarmerStore;
