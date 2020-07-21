/**
 * Created by omerdoron on 16/07/2020.
 */

import React, { useRef } from 'react';

import './HomePage.sass';
import { ArrowRightOutlined } from '@ant-design/icons';
import FarmerTable from './FarmerTable';
import RoadStatusSection from './Roads/RoadStatusSection';
import ResultJson from './ResultJson';
import ScrollButton from './ScrollButton';

const scrollToRef = (ref) => window.scrollTo(0, ref.current.offsetTop);

const HomePage = () => {
    const myRef = useRef(null);
    const executeScroll = () => scrollToRef(myRef);

    return (
        <div className="homepage">
            <div className="country-container">
                <FarmerTable />
                <RoadStatusSection />
            </div>
            <ScrollButton executeScroll={executeScroll} />
            <div ref={myRef}>
                <ResultJson />
            </div>
        </div>
    );
};

export default HomePage;
