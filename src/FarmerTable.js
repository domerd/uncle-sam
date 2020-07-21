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
            width: '15rem',
            render: (text, record) => (
                <Input
                    key={record.id}
                    defaultValue={text}
                    placeholder="Delivery name"
                    onChange={(e) => {
                        const newResult = { ...result };
                        newResult[record.id] = { ...newResult[record.id], name: e.target.value };
                        setResult(newResult);
                    }}
                />
            ),
        },
        {
            title: 'Source ID',
            dataIndex: 'source',
            key: 'source',
            width: '5rem',
        },
        {
            title: 'Size [kg/s]',
            dataIndex: 'size',
            key: 'size',
            width: '5rem',
        },
        {
            title: 'Path',
            dataIndex: 'path',
            key: 'path',
            className: 'path-cells',
            render: (text, record) => (
                <PathForm
                    key={record.id}
                    deliveryId={record.id}
                    sourceFarmer={record.source}
                />
            ),
        },
    ];

    useEffect(() => {
        setFarmers(getDefaultCountryFarmers());
    }, [getDefaultCountryFarmers]);

    return <Table className="farmer-table" bordered columns={columns} dataSource={farmers} />;
};

export default FarmerTable;
