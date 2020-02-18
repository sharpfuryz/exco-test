import React from 'react';

import './HamburgerBtn.css';

const hamburgerBtn = () => (
    <button className="hamburger-btn">
        <div className="hamburger-btn__line" />
        <div className="hamburger-btn__line" />
        <div className="hamburger-btn__line" />
    </button>
);

export default hamburgerBtn;