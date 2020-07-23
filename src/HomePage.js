import React, { useRef } from 'react';

import './HomePage.sass';
import { Button, Layout } from 'antd';
import { DownOutlined } from '@ant-design/icons';
import FarmerTable from './FarmerTable';
import RoadStatusSection from './Roads/RoadStatusSection';
import ResultJson from './ResultJson';

const scrollToRef = (ref) => window.scrollTo(0, ref.current.offsetTop);

const HomePage = () => {
    const jsonResultRef = useRef(null);
    const executeScroll = () => scrollToRef(jsonResultRef);

    return (
        <div className="homepage">
            <div className="row">
                <Layout>
                    <Layout.Content>
                        <div className="country-container">
                            <FarmerTable />
                        </div>
                        <Button icon={<DownOutlined />} shape="circle" type="primary" className="add-toll-road" onClick={executeScroll} />
                        <div ref={jsonResultRef} />
                    </Layout.Content>
                    <Layout.Sider width="20rem">
                        <RoadStatusSection />
                    </Layout.Sider>
                </Layout>
            </div>
            <div className="result-json-container row">
                <ResultJson />
            </div>
            <div className="team-credit">
                By
                <img src="/farmer.png" className="Team-logo" alt="spice logo" />
            </div>

        </div>

    );
};

export default HomePage;
