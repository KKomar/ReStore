import React from 'react';

import { connect } from 'react-redux';

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
                        items.map(renderRow)
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

const mapStateToProps = ({ cartItems, totalPrice }) => {
    return {
        items: cartItems,
        total: totalPrice
    }
};

const mapDispatchToProps = () => {
    return {
        onDecrease: (id) => console.log(`decrease ${id}`),
        onIncrease: (id) => console.log(`increase ${id}`),
        onDelete: (id) => console.log(`delete ${id}`)
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(CartTable);