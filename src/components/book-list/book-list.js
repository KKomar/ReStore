import React, { Component } from 'react';
import { connect } from 'react-redux';

import BookListItem from '../book-list-item';
import Spinner from '../spinner';

import { withBookstoreService, compose } from '../hoc';
import { booksLoaded } from '../../actions';

import './book-list.css';

class BookList extends Component {
    componentDidMount() {
        const { bookstoreService, booksLoaded } = this.props;
        bookstoreService.getBooks()
            .then(data => booksLoaded(data));
    }

    render() {
        const { books, loading } = this.props;

        if (loading) {
            return <Spinner />
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

const mapStateToProps = ({ books, loading }) => {
    return { books, loading };
};

const mapDispatchToProps = {
    // return bindActionCreators({ booksLoaded }, dispatch);
    booksLoaded
};

export default compose(
    withBookstoreService(),
    connect(mapStateToProps, mapDispatchToProps)
)(BookList);