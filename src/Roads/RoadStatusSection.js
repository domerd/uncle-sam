import React from 'react';
import RoadStatus from './RoadStatus';
import AddTollRoad from './AddTollRoad';
import './RoadStatusSection.sass';
import { Card } from 'antd';

const RoadStatusSection = () => (
    <Card className="road-status-section">
        <RoadStatus />
        <AddTollRoad />
    </Card>

);

export default RoadStatusSection;
