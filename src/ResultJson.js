import React, { useContext } from 'react';
import ReactJson from 'react-json-view';
import { ResultStoreContext } from './ResultStore';
import './ResultJson.sass';

const ResultJson = () => {
    const { result } = useContext(ResultStoreContext);

    return (
        <ReactJson
            name="Result"
            theme="monokai"
            src={result}
        />

    );
};

export default ResultJson;
