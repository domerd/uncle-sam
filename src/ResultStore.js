import React, { useState } from 'react';

export const ResultStoreContext = React.createContext();

const ResultStore = ({ children }) => {
    const [result, setResult] = useState({});

    return (
        <ResultStoreContext.Provider value={{ result, setResult }}>
            {children}
        </ResultStoreContext.Provider>
    );
};

export default ResultStore;
