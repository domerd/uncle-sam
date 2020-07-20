/**
 * Created by omerdoron on 16/07/2020.
 */

import React, { useEffect, useContext, useState } from 'react';
import _ from 'lodash';
import { Select } from 'antd';
import classNames from 'classnames';
import './PathForm.sass';
import { ArrowRightOutlined, CloudFilled, HomeFilled } from '@ant-design/icons';
import { ResultStoreContext } from './ResultStore';
import { AdjacencyListStoreContext } from './AdjacencyListStore';

const { Option } = Select;

function RoadSelector({
    options, appendRoad,
}) {
    return (
        <Select
            className="road-selector"
            onChange={(value) => {
                appendRoad(value);
            }}
        >
            {_.map(options, (i) => <Option key={`road-option-${i}`} value={i}>{i}</Option>)}
        </Select>
    );
}

const PathForm = ({ sourceFarmer }) => {
    const { adjacencyList } = useContext(AdjacencyListStoreContext);
    const { result, setResult } = useContext(ResultStoreContext);
    const [pathRoads, setPathRoads] = useState([sourceFarmer]);
    const [homeEnding, setHomeEnding] = useState(false);

    useEffect(() => {
        if (_.isEqual(adjacencyList[pathRoads[pathRoads.length - 1]], ['HOME'])) {
            setHomeEnding(true);
            setResult({ ...result, [sourceFarmer]: pathRoads.slice(1) });
        } else {
            setHomeEnding(false);
            const newResult = { ...result };
            delete newResult[sourceFarmer];
            setResult(newResult);
        }
    }, [pathRoads]);

    const appendRoad = (index, road) => {
        setPathRoads(_.slice(pathRoads, 0, index).concat(road));
    };

    return (
        <div className={classNames('path-form', { home: homeEnding })}>
            <CloudFilled className="element" />
            {pathRoads.map((value, index) => (
                <div className="element">
                    <ArrowRightOutlined className="element" />
                    {!_.isEqual(adjacencyList[value], ['HOME'])
                        ? (
                            <RoadSelector
                                key={`${index}-${value}-road-selector`}
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
