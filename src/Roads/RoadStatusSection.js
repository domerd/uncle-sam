import React from 'react';
import RoadStatus from './RoadStatus';
import AddTollRoad from './AddTollRoad';
import './RoadStatusSection.sass';
import { Card } from 'antd';

const RoadStatusSection = () => (
    <div>
        <div className="road-status-section">
            <RoadStatus />
            <AddTollRoad />
        </div>
    </div>

);

export default RoadStatusSection;
