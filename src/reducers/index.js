const initialState = {
    books: [],
    loading: true,
    error: null
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'BOOKS_REQUESTED':
            return {
                ...state,
                loading: true,
                error: null
            };

        case 'BOOKS_LOADED':
            return {
                books: action.newBooks,
                loading: false,
                error: null
            };

        case 'BOOKS_ERROR':
            return {
                ...state,
                loading: false,
                error: action.error
            };

        default:
            return state;
    }
};

export default reducer;