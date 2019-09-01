import React, { Component } from 'react';
import { connect } from 'react-redux';

import BookListItem from '../book-list-item';

import { withBookstoreService, compose } from '../hoc';
import { booksLoaded } from '../../actions';

class BookList extends Component {
    componentDidMount() {
        const { bookstoreService, booksLoaded } = this.props;
        const data = bookstoreService.getBooks();

        booksLoaded(data);
    }

    render() {
        const { books } = this.props;

        return (
            <ul>
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

const mapStateToProps = state => {
    return {
        books: state.books
    };
};

const mapDispatchToProps = {
    // return bindActionCreators({ booksLoaded }, dispatch);
    booksLoaded
};

export default compose(
    withBookstoreService(),
    connect(mapStateToProps, mapDispatchToProps)
)(BookList);