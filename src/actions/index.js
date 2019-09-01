export const booksLoaded = newBooks => {
    return {
        type: 'BOOKS_LOADED',
        newBooks
    };
};