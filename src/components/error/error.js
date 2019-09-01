import React from 'react';

import icon from './error.jpg';

import './error.css';

const Error = () => {
    return (
        <div className='error'>
            <img src={icon} />
            <span>Sorry, something gone wrong</span>
        </div>
    );
};

export default Error;