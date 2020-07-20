import React, { useContext, useEffect, useState } from 'react';
import { Table } from 'antd';
import './FarmerTable.sass';
import { FarmerStoreContext } from './FarmerStore';
import PathForm from './PathForm';
import { ResultStoreContext } from './ResultStore';

const FarmerTable = () => {
    const { getDefaultCountryFarmers } = useContext(FarmerStoreContext);
    const [farmers, setFarmers] = useState([]);
    // const { result, setResult } = resultState;
    const { result, setResult } = useContext(ResultStoreContext);

    const columns = [
        {
            title: 'Name',
            dataIndex: 'name',
            key: 'name',
        },
        {
            title: 'ID',
            dataIndex: 'id',
            key: 'id',
        },
        {
            title: 'Source farmer',
            dataIndex: 'source',
            key: 'source',
        },
        {
            title: 'Size',
            dataIndex: 'size',
            key: 'size',
            render: (text) => `${text} Kilograms`,
        },
        {
            title: 'Path',
            dataIndex: 'path',
            key: 'path',
            render: (text, record) => (
                <PathForm
                    resultState={{ result, setResult }}
                    sourceFarmer={record.source}
                    recordId={record.id}
                />
            ),
        },
    ];

    useEffect(() => {
        setFarmers(getDefaultCountryFarmers());
    }, [getDefaultCountryFarmers]);

    return <Table className="farmer-table" columns={columns} dataSource={farmers} />;
};

export default FarmerTable;
