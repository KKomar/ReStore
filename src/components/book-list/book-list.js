import React, { Component } from 'react';
import { connect } from 'react-redux';

import BookListItem from '../book-list-item';
import Spinner from '../spinner';
import Error from '../error';

import { withBookstoreService, compose } from '../hoc';
import { fetchBooks } from '../../actions';

import './book-list.css';

class BookList extends Component {
    componentDidMount() {
        this.props.fetchBooks();
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

const mapDispatchToProps = (dispatch, ownProps) => {
    const { bookstoreService } = ownProps;
    return {
        fetchBooks: fetchBooks(bookstoreService, dispatch)
    };
};

export default compose(
    withBookstoreService(),
    connect(mapStateToProps, mapDispatchToProps)
)(BookList);