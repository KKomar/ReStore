import React, { Component } from 'react';
import { connect } from 'react-redux';

import BookListItem from '../book-list-item';
import Spinner from '../spinner';
import Error from '../error';

import { withBookstoreService, compose } from '../hoc';
import { booksLoaded, booksRequested, booksError } from '../../actions';

import './book-list.css';

class BookList extends Component {
    componentDidMount() {
        const { bookstoreService, booksLoaded, booksRequested, booksError } = this.props;

        booksRequested();
        bookstoreService.getBooks()
            .then(data => booksLoaded(data))
            .catch(err => booksError(err));
    }

    render() {
        const { books, loading, error } = this.props;

        if (loading) {
            return <Spinner />
        }

        if (error) {
            return <Error />
        }

        return (
            <ul className='book-list'>
                {
                    books.map(book => {
                        return <li key={ book.id }>
                            <BookListItem book={ book }/>
                        </li>
                    })
                }
            </ul>
        );
    }
}

const mapStateToProps = ({ books, loading, error }) => {
    return { books, loading, error };
};

const mapDispatchToProps = {
    // return bindActionCreators({ booksLoaded }, dispatch);
    booksLoaded, booksRequested, booksError
};

export default compose(
    withBookstoreService(),
    connect(mapStateToProps, mapDispatchToProps)
)(BookList);