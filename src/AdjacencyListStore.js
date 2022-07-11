import React, { useEffect, useState } from 'react';
import { getMap } from './actions';

export const AdjacencyListStoreContext = React.createContext();

const AdjacencyListStore = ({ children }) => {
    const [adjacencyList, setAdjacencyList] = useState({});

    useEffect(() => {
        getMap().then(({ data }) => {
            setAdjacencyList(data);
        });
    }, []);

    return (
        <AdjacencyListStoreContext.Provider value={{ adjacencyList }}>
            {children}
        </AdjacencyListStoreContext.Provider>
    );
};

export default AdjacencyListStore;
