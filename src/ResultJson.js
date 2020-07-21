import React, { useContext, useState } from 'react';
import ReactJson from 'react-json-view';
import { ResultStoreContext } from './ResultStore';
import './ResultJson.sass';

const ResultJson = () => {
    const { result } = useContext(ResultStoreContext);

    return (
        <div className="result-json">
            <ReactJson
                name="Result"
                theme="monokai"
                src={result}
            />
        </div>

    );
};

export default ResultJson;
