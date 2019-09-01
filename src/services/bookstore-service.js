export default class BookstoreService {
    getBooks() {
        return [
            {
                id: 1,
                title: 'JavaScript: The Good Parts',
                author: 'Douglas Crockford'
            },
            {
                id: 2,
                title: 'Thinking in Java (4th Edition)',
                author: 'Bruce Eckel'
            },
            {
                id: 3,
                title: 'The War of Art',
                author: 'Steven Pressfield'
            }
        ];
    }
}