import React, { Component } from 'react';
import { connect } from 'react-redux';

import BookList from '../components/book-list';
import Spinner from '../components/spinner';
import Error from '../components/error';

import { withBookstoreService, compose } from '../components/hoc';
import { fetchBooks, bookAddedToCart } from '../actions';

class BookListContainer extends Component {
    componentDidMount() {
        this.props.fetchBooks();
    }

    render() {
        const { books, loading, error, onAddedToCart } = this.props;

        if (loading) {
            return <Spinner />
        }

        if (error) {
            return <Error />
        }

        return <BookList books={ books } onAddedToCart={ onAddedToCart } />
    }
}

const mapStateToProps = ({ bookList: { books, loading, error }}) => {
    return { books, loading, error };
};

const mapDispatchToProps = (dispatch, ownProps) => {
    const { bookstoreService } = ownProps;
    return {
        fetchBooks: fetchBooks(bookstoreService, dispatch),
        onAddedToCart: (id) => dispatch(bookAddedToCart(id))
    };
};

export default compose(
    withBookstoreService(),
    connect(mapStateToProps, mapDispatchToProps)
)(BookListContainer);