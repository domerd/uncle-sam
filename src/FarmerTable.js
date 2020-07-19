import React, { useContext, useEffect, useState } from 'react';
import { Table } from 'antd';
import './FarmerTable.sass';
import { FarmerStoreContext } from './FarmerStore';

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
        title: 'Size',
        dataIndex: 'size',
        key: 'size',
        render: (text) => `${text} Kilograms`,
    },
];

const FarmerTable = () => {
    const [farmers, setFarmers] = useState([]);
    const { getDefaultCountryFarmers } = useContext(FarmerStoreContext);

    useEffect(() => {
        setFarmers(getDefaultCountryFarmers());
    }, [getDefaultCountryFarmers]);

    return <Table className="farmer-table" columns={columns} dataSource={farmers} />;
};

export default FarmerTable;
