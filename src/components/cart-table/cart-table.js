import React from 'react';

import './cart-table.css';

const CartTable = () => {
    return (
        <div className='cart-table'>
            <h2>Your order</h2>
            <table className='table'>
                <thead>
                    <th>#</th>
                    <th>Item</th>
                    <th>Count</th>
                    <th>Price</th>
                    <th>Action</th>
                </thead>

                <tbody>
                    <tr>
                        <td>1</td>
                        <td>Thinking in Java (4th Edition)</td>
                        <td>2</td>
                        <td>$100</td>
                        <td>
                            <button className='btn btn-outline-success'>
                                <i className="fas fa-plus-circle"></i>
                            </button>
                            <button className='btn btn-outline-warning'>
                                <i className="fas fa-minus-circle"></i>
                            </button>
                            <button className='btn btn-outline-danger'>
                                <i className="fas fa-trash"></i>
                            </button>
                        </td>
                    </tr>
                </tbody>
            </table>

            <div className='total'>
                <div className='total-price'>Total: $100</div>
                <button className='btn btn-primary checkout'>
                    <i className="far fa-credit-card"></i>
                    Checkout
                </button>
            </div>
        </div>
    );
};

export default CartTable;