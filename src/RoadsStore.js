/**
 * Created by omerdoron on 16/07/2020.
 */


import React, {useState} from 'react';

export const RoadsStoreContext = React.createContext();

const RoadsStore = ({ children }) => {
    const [roads, setRoads] = useState([
        {
            name: 'Highway 6',
            weight: 15,
            max_weight: 20,
        },
        {
            name: 'Highway 2',
            weight: 16,
            max_weight: 25,
        },
        {
            name: 'Highway 1',
            weight: 97,
            max_weight: 100,
        },
        {
            name: 'Highway 4',
            weight: 12,
            max_weight: 75,
        },
    ]);

    return <RoadsStoreContext.Provider value={{ roads }}>
        {children}
    </RoadsStoreContext.Provider>
};

export default RoadsStore;

