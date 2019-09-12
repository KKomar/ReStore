import React from 'react';
import { connect } from 'react-redux';

import { bookAddedToCart, bookDeletedFromCart, allBooksDeletedFromCart } from '../actions';

import CartTable from '../components/cart-table';

const Cart = ({ items, total, onDecrease, onIncrease, onDelete }) => {
    return (
        <CartTable items={ items }
                   total={ total }
                   onDecrease={ onDecrease }
                   onIncrease={ onIncrease }
                   onDelete={ onDelete }
        />
    );
};

const mapStateToProps = ({ cart: { items, totalPrice }}) => {
    return {
        items,
        total: totalPrice
    }
};

const mapDispatchToProps = {
    onDecrease: bookDeletedFromCart,
    onIncrease: bookAddedToCart,
    onDelete: allBooksDeletedFromCart
};

export default connect(mapStateToProps, mapDispatchToProps)(Cart);