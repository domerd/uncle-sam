import React, { useContext, useEffect, useState } from 'react';
import { Table } from 'antd';
import './FarmerTable.sass';
import { FarmerStoreContext } from './FarmerStore';
import PathForm from './PathForm';

const FarmerTable = () => {
    const { getDefaultCountryFarmers } = useContext(FarmerStoreContext);
    const [farmers, setFarmers] = useState([]);

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
                    sourceFarmer={record.source}
                    key={record.id}
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
