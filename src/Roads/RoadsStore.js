/**
 * Created by omerdoron on 16/07/2020.
 */

import React, { useCallback, useContext, useState } from 'react';
import _ from 'lodash';
import { ResultStoreContext } from '../ResultStore';
import { FarmerStoreContext } from '../FarmerStore';

export const RoadsStoreContext = React.createContext();

const RoadsStore = ({ children }) => {
    const [roads, setRoads] = useState([
        {
            name: 6,
            max_weight: 70,
            toll: true,
        },
        {
            name: 2,
            max_weight: 60,
            toll: true,
        },
        {
            name: 1,
            max_weight: 100,
            toll: true,
        },
        {
            name: 4,
            max_weight: 75,
            toll: true,
        },
        {
            name: 12,
            max_weight: 80,
            toll: true,
        },
        {
            name: 40,
            max_weight: 100,
            toll: true,
        },
        {
            name: 41,
            max_weight: 100,
            toll: true,
        },
        {
            name: 42,
            max_weight: 100,
            toll: true,
        },
        {
            name: 43,
            max_weight: 100,
            toll: true,
        },
        {
            name: 44,
            max_weight: 100,
            toll: true,
        },
        {
            name: 5,
            toll: false,
        },
        {
            name: 90,
            toll: false,
        },
    ]);

    const { result } = useContext(ResultStoreContext);
    const { getDeliveryWeightById } = useContext(FarmerStoreContext);

    const getRoadWeight = (name) => _.reduce(result, (sum, deliveryData, deliveryId) => {
        if (_.includes(deliveryData.pathRoads, name)) {
            return sum + getDeliveryWeightById(Number.parseInt(deliveryId));
        }
        return sum;
    }, 0);

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
        <RoadsStoreContext.Provider value={{ roads, changeRoadToToll, getRoadWeight }}>
            {children}
        </RoadsStoreContext.Provider>
    );
};

export default RoadsStore;
