/**
 * Created by omerdoron on 16/07/2020.
 */


import React, {useState} from 'react';

export const RoadsStoreContext = React.createContext();

const RoadsStore = ({ children }) => {
    const [roads, setRoads] = useState({
        2: 'Road 2',
        4: 'Road 4',
        5: 'Road 5'
    });

    return <RoadsStoreContext.Provider value={{ roads }}>
        {children}
    </RoadsStoreContext.Provider>
};

export default RoadsStore;

