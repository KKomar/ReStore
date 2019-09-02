import React from 'react';

import './book-list-item.css';

const BookListItem = ({ book }) => {
    const { title, author, cover, price } = book;

    return (
        <div className='book-list-item'>
            <div className='book-cover'>
                <img src={ cover } alt='book cover' />
            </div>
            <div className='book-details'>
                <span className='book-title'>{ title }</span>
                <div className='book-author'>{ author }</div>
                <div className='book-price'>${ price }</div>
                <button className='btn btn-primary add-to-cart'>Add to cart</button>
            </div>

        </div>
    );
};

export default BookListItem;