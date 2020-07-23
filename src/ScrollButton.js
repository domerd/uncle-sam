import React from 'react';
import './ScrollButton.sass';

import './HomePage.sass';
import { ArrowDownOutlined } from '@ant-design/icons';
import { Button, Modal } from 'antd';

const ScrollButton = ({ executeScroll }) => (
    // <button type="text" className="btn" onClick={executeScroll}>
    //     <span>Watch JSON</span>
    //     <span>{' '}</span>
    //     <ArrowDownOutlined id="icon" />
    // </button>
    <Button icon={<ArrowDownOutlined />} shape="circle" type="primary" className="add-toll-road" onClick={executeScroll} />
);
export default ScrollButton;
