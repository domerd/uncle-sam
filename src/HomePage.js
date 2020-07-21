/**
 * Created by omerdoron on 16/07/2020.
 */

import React from 'react';

import './HomePage.sass';
import FarmerTable from './FarmerTable';
import RoadStatusSection from './Roads/RoadStatusSection';
import ResultJson from './ResultJson';

const HomePage = () => (
    <div className="homepage">
        <div className="county-container">
            <FarmerTable />

            <RoadStatusSection />
        </div>
        <ResultJson />
    </div>
);

export default HomePage;
