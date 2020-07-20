/**
 * Created by omerdoron on 16/07/2020.
 */

import React, { useEffect, useContext, useState } from 'react';
import { getFarmers } from './actions';
import { Button, Select } from 'antd';
import { ArrowRightOutlined, CloudFilled, HomeFilled } from '@ant-design/icons';
import './PathForm.sass';
import _ from 'lodash';
import { AdjacencyListStoreContext } from './AdjacencyListStore';
import { ResultStoreContext } from './ResultStore';

const { Option } = Select;

function RoadSelector({
    color, source, options, appendRoad,
}) {
    return (
        <Select
            style={{ width: 120, color, fontWeight: 'bold' }}
            onChange={(value) => {
                appendRoad(value);
            }}
        >
            {options.map((i) => <Option key={i} value={i}>{i}</Option>)}
        </Select>
    );
}

const PathForm = ({ sourceFarmer }) => {
    const { adjacencyList } = useContext(AdjacencyListStoreContext);
    const { result, setResult } = useContext(ResultStoreContext);
    const [pathRoads, setPathRoads] = useState([sourceFarmer]);
    const [homeEnding, setHomeEnding] = useState(false);

    useEffect(() => {
        getFarmers();
    }, []);

    useEffect(() => {
        if (_.isEqual(adjacencyList[pathRoads[pathRoads.length - 1]], ['HOME'])) {
            setHomeEnding(true);
            setResult({ ...result, [sourceFarmer]: pathRoads.slice(1) });
        } else {
            const newResult = { ...result };
            delete newResult[sourceFarmer];
            setResult(newResult);
        }
    }, [pathRoads]);

    const appendRoad = (index, road) => {
        setPathRoads(_.slice(pathRoads, 0, index).concat(road));
    };

    return (
        <div>
            <CloudFilled className="element" />
            {pathRoads.map((value, index) => (
                <div className="element">
                    <ArrowRightOutlined className="element" />
                    {!_.isEqual(adjacencyList[value], ['HOME'])
                        ? (
                            <RoadSelector
                                key={value}
                                color={homeEnding ? 'LawnGreen' : 'black'}
                                options={adjacencyList[value]}
                                appendRoad={_.partial(appendRoad, index + 1)}
                            />
                        )
                        : <HomeFilled className="element" />}
                </div>
            ))}
        </div>
    );
};

export default PathForm;
