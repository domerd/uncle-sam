import React from 'react';
import RoadStatus from './RoadStatus';
import AddTollRoad from './AddTollRoad';
import './RoadStatusSection.sass';
import { Card } from 'antd';

const RoadStatusSection = () => (
    <Card title="Roads Efficiency" className="road-status-section" bordered={false} style={{ width: 300 }}>
        <RoadStatus />
        <AddTollRoad />
    </Card>

);

export default RoadStatusSection;
