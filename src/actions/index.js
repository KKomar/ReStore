const booksRequested = () => {
    return {
        type: 'FETCH_BOOKS_REQUEST'
    };
};

const booksLoaded = books => {
    return {
        type: 'FETCH_BOOKS_SUCCESS',
        books
    };
};

const booksError = error => {
    return {
        type: 'FETCH_BOOKS_FAILURE',
        error
    };
};

export const bookAddedToCart = id => {
    return {
        type: 'BOOK_ADDED_TO_CART',
        id
    };
};

export const fetchBooks = (bookstoreService, dispatch) => () => {
    dispatch(booksRequested());
    bookstoreService.getBooks()
        .then(data => dispatch(booksLoaded(data)))
        .catch(err => dispatch(booksError(err)));
};