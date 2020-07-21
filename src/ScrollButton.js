import React from 'react';
import './ScrollButton.sass';

import './HomePage.sass';
import { ArrowDownOutlined } from '@ant-design/icons';

const ScrollButton = ({ executeScroll }) => (
    <button type="text" className="cta" onClick={executeScroll}>
        <span>See JSON</span>
        <ArrowDownOutlined id="icon" />
    </button>
);
export default ScrollButton;
