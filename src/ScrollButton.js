import React from 'react';
import './ScrollButton.sass';

import './HomePage.sass';
import { ArrowDownOutlined } from '@ant-design/icons';

const ScrollButton = ({ executeScroll }) => (
    <button type="text" className="btn" onClick={executeScroll}>
        <span>Watch JSON</span>
        <span>{' '}</span>
        <ArrowDownOutlined id="icon" />
    </button>
);
export default ScrollButton;
