import React from 'react';
import { connect } from 'react-redux';

import { bookAddedToCart, bookDeletedFromCart, allBooksDeletedFromCart } from '../../actions';

import './cart-table.css';

const CartTable = ({ items, total, onDecrease, onIncrease, onDelete }) => {
    const renderRow = (item, idx) => {
        const { id, title, count, total } = item;

        return (
            <tr key={ id }>
                <td>{ idx + 1 }</td>
                <td>{ title }</td>
                <td>{ count }</td>
                <td>${ total }</td>
                <td>
                    <button
                        onClick={() => onIncrease(id)}
                        className='btn btn-outline-success'
                    >
                        <i className="fas fa-plus-circle"></i>
                    </button>
                    <button
                        onClick={() => onDecrease(id)}
                        className='btn btn-outline-warning'
                    >
                        <i className="fas fa-minus-circle"></i>
                    </button>
                    <button
                        onClick={() => onDelete(id)}
                        className='btn btn-outline-danger'
                    >
                        <i className="fas fa-trash"></i>
                    </button>
                </td>
            </tr>
        );
    };

    return (
        <div className='cart-table'>
            <h2>Your order</h2>
            <table className='table'>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Item</th>
                        <th>Count</th>
                        <th>Price</th>
                        <th>Action</th>
                    </tr>
                </thead>

                <tbody>
                    {
                        items.length > 0 ? items.map(renderRow) : <tr><td>No orders</td></tr>
                    }
                </tbody>
            </table>

            <div className='total'>
                <div className='total-price'>Total: ${ total }</div>
                <button className='btn btn-primary checkout'>
                    <i className="far fa-credit-card"></i>
                    Checkout
                </button>
            </div>
        </div>
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

export default connect(mapStateToProps, mapDispatchToProps)(CartTable);