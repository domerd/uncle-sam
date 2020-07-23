/**
 * Created by omerdoron on 16/07/2020.
 */

import React, { useRef } from 'react';

import './HomePage.sass';
import { Button, Layout } from 'antd';
import { ArrowDownOutlined } from '@ant-design/icons';
import DownOutlined from '@ant-design/icons/lib/icons/DownOutlined';
import FarmerTable from './FarmerTable';
import RoadStatusSection from './Roads/RoadStatusSection';
import ResultJson from './ResultJson';
import ScrollButton from './ScrollButton';

const scrollToRef = (ref) => window.scrollTo(0, ref.current.offsetTop);

const COLOR2 = '#652d31';
const COLOR1 = '#5a282c';
const COLOR3 = '#ac3f37';
const MySep = () => (
    <svg
        id
        preserveAspectRatio="xMidYMax meet"
        className="svg-separator sep1"
        viewBox="0 0 1600 100"
        style={{}}
        data-height={100}
    >
        <polygon
            className=""
            style={{ fill: '#94295b' }}
            points="886,86 800,172 714,86 -4,86 -4,204 1604,204 1604,86 "
        />
        <polygon
            className=""
            style={{ opacity: 1, fill: 'rgba(148,41,91,0.85)' }}
            points="800,172 886,86 900,86 800,186 700,86 714,86 "
        />
        <polygon
            className=""
            style={{ opacity: 1, fill: 'rgba(151,42,93,0.68)' }}
            points="800,162 876,86 888,86 800,174 712,86 724,86 "
        />
    </svg>
);

const HomePage = () => {
    const jsonResultRef = useRef(null);
    const executeScroll = () => scrollToRef(jsonResultRef);

    return (
        <div className="homepage">
            <div className="row">
                <Layout className="main-row">
                    <Layout.Content>
                        <div className="country-container">
                            <FarmerTable />
                        </div>
                        <Button icon={<DownOutlined />} shape="circle" type="primary" className="add-toll-road" onClick={executeScroll} />
                    </Layout.Content>
                    <Layout.Sider width="20rem">
                        <RoadStatusSection />
                    </Layout.Sider>
                </Layout>
            </div>
            {/* <h1>sa</h1> */}
            {/* <div className="row red"> */}
            {/* <MySep /> */}
            {/* </div> */}
            <span ref={jsonResultRef} />
            <div className="result-json-container row">
                <ResultJson />
            </div>
        </div>

    );
};

export default HomePage;
