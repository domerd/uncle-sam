import React, { useContext } from 'react';
import { Progress } from 'antd';
import _ from 'lodash';
import { RoadsStoreContext } from './RoadsStore';
import './RoadStatus.sass';

const FULL_WEIGHT = 100;
const CRITICAL_WEIGHT = 80;
const SAFE_WEIGHT = 20;

const RED = '#ff4d4f';
const ORANGE = '#faad14';
const GREEN = '#52c41a';
const BLUE = '';

const RoadStatus = () => {
    const { roads, getRoadWeight } = useContext(RoadsStoreContext);
    return (
        <div className="road-status-container">
            {_.map(_.sortBy(_.filter(roads, 'toll'), 'name'), (road) => {
                const percentage = (Math.round(getRoadWeight(road.name) * 100 / road.max_weight));
                let color;
                if (percentage >= FULL_WEIGHT) {
                    color = RED;
                } else if (percentage > CRITICAL_WEIGHT) {
                    color = ORANGE;
                } else if (percentage < SAFE_WEIGHT) {
                    color = GREEN;
                } else {
                    color = BLUE;
                }
                return (
                    <div className="road-status">
                        <p>{road.name}</p>
                        <Progress
                            type="line"
                            percent={percentage}
                            strokeColor={color}
                            status={percentage >= FULL_WEIGHT && 'exception'}
                        />
                        <p className="road-status-weight">
                            {`${getRoadWeight(road.name)} / ${road.max_weight} Kg`}
                        </p>
                    </div>
                );
            })}
        </div>
    );
};

export default RoadStatus;
