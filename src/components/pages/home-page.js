import React from 'react';

import CartTable from '../cart-table';

import BookListContainer from '../../containers/book-list-container';

const HomePage = () => {
    return (
        <React.Fragment>
            <BookListContainer />
            <CartTable />
        </React.Fragment>
    );
};

export default HomePage;