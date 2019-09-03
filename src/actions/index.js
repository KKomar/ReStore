export const booksLoaded = newBooks => {
    return {
        type: 'BOOKS_LOADED',
        newBooks
    };
};

export const booksRequested = () => {
    return {
        type: 'BOOKS_REQUESTED'
    };
};

export const booksError = error => {
    return {
        type: 'BOOKS_ERROR',
        error
    }
};