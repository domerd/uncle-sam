/**
 * Created by omerdoron on 16/07/2020.
 */

import React, { useState } from 'react';
import _ from 'lodash';

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
        {
            name: 'Highway 90',
            weight: 20,
            toll: false,
        },
    ]);

    const changeRoadToToll = (name, max_weight) => {
        const newRoads = _.map(roads, (road) => {
            if (road.name === name) {
                return { ...road, toll: true, max_weight };
            }
            return road;
        });
        setRoads(newRoads);
    };

    return (
        <RoadsStoreContext.Provider value={{ roads, changeRoadToToll }}>
            {children}
        </RoadsStoreContext.Provider>
    );
};

export default RoadsStore;
