import React, { useContext } from 'react';
import { Progress } from 'antd';
import _ from 'lodash';
import { RoadsStoreContext } from './RoadsStore';
import './RoadStatus.sass';

const CRITICAL_WEIGHT = 80;
const SAFE_WEIGHT = 20;

const RED = '#ff4d4f';
const GREEN = '#52c41a';
const BLUE = '';

const RoadStatus = () => {
    const { roads } = useContext(RoadsStoreContext);
    return (
        <div className="road-status-container">
            {_.map(_.sortBy(roads, 'name'), (road) => {
                const percentage = (road.weight * 100) / road.max_weight;
                let color;
                if (percentage > CRITICAL_WEIGHT) {
                    color = RED;
                } else if (percentage < SAFE_WEIGHT) {
                    color = GREEN;
                } else {
                    color = BLUE;
                }
                return (
                    <div className="road-status">
                        <p>{road.name}</p>
                        <Progress type="line" percent={percentage} strokeColor={color} />
                    </div>
                )
            })}
        </div>
    );
};

export default RoadStatus;
