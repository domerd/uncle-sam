import React, { useContext, useEffect, useState } from 'react';
import { Input, Table } from 'antd';
import './FarmerTable.sass';
import { FarmerStoreContext } from './FarmerStore';
import PathForm from './PathForm';
import { ResultStoreContext } from './ResultStore';

const FarmerTable = () => {
    const { getDefaultCountryFarmers } = useContext(FarmerStoreContext);
    const { result, setResult } = useContext(ResultStoreContext);
    const [farmers, setFarmers] = useState([]);

    const columns = [
        {
            title: 'ID',
            dataIndex: 'id',
            key: 'id',
        },
        {
            title: 'Delivery Name',
            dataIndex: 'name',
            key: 'name',
            render: (text) => (
                <Input
                    defaultValue={text}
                    placeholder={text ? false : 'Insert name'}
                    on
                />
            ),
        },
        {
            title: 'Source Farmer ID',
            dataIndex: 'source',
            key: 'source',
        },
        {
            title: 'Size [kg/s]',
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
                    deliveryID={record.id}
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
