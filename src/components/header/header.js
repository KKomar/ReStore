import React from 'react';
import { Link } from 'react-router-dom';

import './header.css';

const Header = ({ items, total }) => {
    return (
        <header className='header'>
            <Link to='/' className='logo text-dark'>ReStore</Link>
            <Link to='/cart' className='shopping-cart'>
                <i className="cart-icon fas fa-shopping-cart"></i>
                { items } items (${ total })
            </Link>
        </header>
    );
};

export default Header;