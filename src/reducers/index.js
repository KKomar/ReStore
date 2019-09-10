const initialState = {
    books: [],
    loading: true,
    error: null,
    cartItems: [],
    totalPrice: 0
};

const updateCartItems = (cartItems, item, idx) => {
    if (item.count === 0) {
        return cartItems.filter(item => item.count === 0)
    }

    if (idx === -1) {
        return [
            ...cartItems,
            item
        ]
    }

    return [
        ...cartItems.slice(0, idx),
        item,
        ...cartItems.slice(idx + 1)
    ]
};

const updateCartItem = (book, item = {}, quantity) => {
    const { id = book.id, title = book.title, count = 0, total = 0 } = item;

    return {
        id,
        title,
        count: count + quantity,
        total: total + quantity*book.price
    };
};

const updateOrder = (state, bookId, quantity) => {
    const { books, cartItems } = state;

    const book = books.find(book => book.id === bookId);
    const itemIndex = cartItems.findIndex(item => item.id === bookId);
    const item = cartItems[itemIndex];

    const newItem = updateCartItem(book, item, quantity);

    return {
        ...state,
        cartItems: updateCartItems(cartItems, newItem, itemIndex)
    };
};

const reducer = (state = initialState, action) => {
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

        case 'BOOK_ADDED_TO_CART':
            return updateOrder(state, action.id, 1);

        case 'BOOK_DELETED_FROM_CART':
            return updateOrder(state, action.id, -1);

        case 'ALL_BOOKS_DELETED_FROM_CART':
            return {
                ...state,
                cartItems: state.cartItems.filter(item => item.id !== action.id)
            };

        default:
            return state;
    }
};

export default reducer;