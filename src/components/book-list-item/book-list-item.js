import React from 'react';

import './book-list-item.css';

const BookListItem = ({ book }) => {
    const { title, author, cover, price } = book;

    return (
        <div className='book-list-item'>
            <div className='book-cover'>
                <img src={ cover } alt='book cover image' />
            </div>
            <div className='book-details'>
                <a href='#' className='book-title'>{ title }</a>
                <div className='book-author'>{ author }</div>
                <div className='book-price'>${ price }</div>
                <button className='btn btn-primary add-to-cart'>Add to cart</button>
            </div>

        </div>
    );
};

export default BookListItem;