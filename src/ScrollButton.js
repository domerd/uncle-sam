import React from 'react';
import './ScrollButton.sass';

import './HomePage.sass';
import { ArrowRightOutlined } from '@ant-design/icons';

const ScrollButton = ({ executeScroll }) => (
    <button type="text" className="cta" onClick={executeScroll}>
        <span>See JSON</span>
        <ArrowRightOutlined id="icon" />
    </button>
);
export default ScrollButton;
