import React, { useContext, useState } from 'react';
import ReactJson from 'react-json-view';
import { ResultStoreContext } from './ResultStore';

const ResultJson = () => {
    const { result } = useContext(ResultStoreContext);

    return (
        <ReactJson
            style={{
                borderRadius: 10, padding: 50, textAlign: 'left',
            }}
            name="Result"
            theme="monokai"
            src={result}
        />
    );
};

export default ResultJson;
