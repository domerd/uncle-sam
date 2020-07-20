/**
 * Created by omerdoron on 16/07/2020.
 */

import React, { useState } from 'react';

export const RoadsStoreContext = React.createContext();

const RoadsStore = ({ children }) => {
    const [roads, setRoads] = useState([
        {
            name: 'Highway 6',
            weight: 15,
            max_weight: 20,
            toll: true,
        },
        {
            name: 'Highway 2',
            weight: 21,
            max_weight: 25,
            toll: true,
        },
        {
            name: 'Highway 1',
            weight: 106,
            max_weight: 100,
            toll: true,
        },
        {
            name: 'Highway 4',
            weight: 12,
            max_weight: 75,
            toll: true,
        },
        {
            name: 'Highway 5',
            weight: 17,
            toll: false,
        },
    ]);

    return (
        <RoadsStoreContext.Provider value={{ roads }}>
            {children}
        </RoadsStoreContext.Provider>
    );
};

export default RoadsStore;
