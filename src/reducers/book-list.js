const initialState = {
    books: [],
    loading: true,
    error: null
};

const bookList = (state = initialState, action) => {
    switch (action.type) {
        case 'FETCH_BOOKS_REQUEST':
            return {
                ...state,
                loading: true,
                error: null
            };

        case 'FETCH_BOOKS_SUCCESS':
            return {
                ...state,
                books: action.books,
                loading: false,
                error: null
            };

        case 'FETCH_BOOKS_FAILURE':
            return {
                ...state,
                loading: false,
                error: action.error
            };

        default:
            return state;
    }
};

export default bookList;