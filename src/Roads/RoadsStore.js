/**
 * Created by omerdoron on 16/07/2020.
 */

import React, {
    useContext, useEffect, useState,
} from 'react';
import _ from 'lodash';
import { ResultStoreContext } from '../ResultStore';
import { FarmerStoreContext } from '../FarmerStore';
import { getRoads } from '../actions';

export const RoadsStoreContext = React.createContext();

const RoadsStore = ({ children }) => {
    const [roads, setRoads] = useState([]);

    const { result } = useContext(ResultStoreContext);
    const { getDeliveryWeightById } = useContext(FarmerStoreContext);

    useEffect(() => {
        getRoads().then(({ data }) => {
            setRoads(data);
        });
    }, []);

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
