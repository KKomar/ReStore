export default class BookstoreService {
    data = [
        {
            id: 1,
            title: 'JavaScript: The Good Parts',
            author: 'Douglas Crockford',
            price: 30,
            cover: 'https://images-na.ssl-images-amazon.com/images/I/5131OWtQRaL._SX381_BO1,204,203,200_.jpg'
        },
        {
            id: 2,
            title: 'Thinking in Java (4th Edition)',
            author: 'Bruce Eckel',
            price: 50,
            cover: 'https://images-na.ssl-images-amazon.com/images/I/61-ZAFCWcLL._SX376_BO1,204,203,200_.jpg'
        },
        {
            id: 3,
            title: 'The War of Art',
            author: 'Steven Pressfield',
            price: 10,
            cover: 'https://images-na.ssl-images-amazon.com/images/I/41ET8OFVFCL.jpg'
        }
    ];

    getBooks() {
        return new Promise((resolve) => {
            setTimeout(() => {
                resolve(this.data)
            }, 700);
        });
    }
}