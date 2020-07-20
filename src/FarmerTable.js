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
            title: 'Source Farmer',
            dataIndex: 'source',
            key: 'source',
        },
        {
            title: 'Size (in Kgs)',
            dataIndex: 'size',
            key: 'size',
        },
        {
            title: 'Path',
            dataIndex: 'path',
            key: 'path',
            className: 'path-cells',
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
