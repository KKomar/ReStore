import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

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

const mapStateToProps = ({ cart: { totalPrice, totalCount }}) => {
    return {
        items: totalCount,
        total: totalPrice
    };
};

export default connect(mapStateToProps)(Header);