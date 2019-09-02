import React from 'react';

import './header.css';

const Header = ({ items, total }) => {
    return (
        <header className='header'>
            <a href="#" className='logo text-dark'>ReStore</a>
            <a className='shopping-cart'>
                <i className="cart-icon fas fa-shopping-cart"></i>
                { items } items (${ total })
            </a>
        </header>
    );
};

export default Header;