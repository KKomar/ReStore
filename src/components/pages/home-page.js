import React from 'react';

import CartTable from '../cart-table';

import BookList from '../book-list';

const HomePage = () => {
    return (
        <React.Fragment>
            <BookList />
            <CartTable />
        </React.Fragment>
    );
};

export default HomePage;