const updateCartItems = (items, item, idx) => {
    if (item.count === 0) {
        return items.filter(book => book.id !== item.id)
    }

    if (idx === -1) {
        return [
            ...items,
            item
        ]
    }

    return [
        ...items.slice(0, idx),
        item,
        ...items.slice(idx + 1)
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

const updateOrder = (state, bookId, quantity, price) => {
    const { bookList: { books }, cart: { items, totalCount, totalPrice }} = state;

    const book = books.find(book => book.id === bookId);
    const itemIndex = items.findIndex(item => item.id === bookId);
    const item = items[itemIndex];

    const newItem = updateCartItem(book, item, quantity);

    return {
        totalCount: totalCount + quantity,
        totalPrice: totalPrice + price,
        items: updateCartItems(items, newItem, itemIndex)
    };
};

const updateCart = (state, action) => {
    if (state === undefined) {
        return {
            items: [],
            totalPrice: 0,
            totalCount: 0
        }
    }

    let book;

    switch (action.type) {
        case 'BOOK_ADDED_TO_CART':
            book = state.bookList.books.find(book => book.id === action.id);
            return updateOrder(state, action.id, 1, book.price);

        case 'BOOK_DELETED_FROM_CART':
            book = state.bookList.books.find(book => book.id === action.id);
            return updateOrder(state, action.id, -1, -book.price);

        case 'ALL_BOOKS_DELETED_FROM_CART':
            const item = state.cart.items.find(item => item.id === action.id);
            return updateOrder(state, action.id, -item.count, -item.total);

        default:
            return state.cart;
    }
};

export default updateCart;