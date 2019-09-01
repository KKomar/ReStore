import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';

import App from './components/app';
import ErrorBoundary from './components/error-boundary';
import BookstoreService from './services/bookstore-service';
import { BookstoreProvider } from './components/service-context';

import store from './store';

const bookstoreService = new BookstoreService();

ReactDOM.render(
    <Provider store={ store }>
        <ErrorBoundary>
            <BookstoreProvider value={ bookstoreService }>
                <Router>
                    <App />
                </Router>
            </BookstoreProvider>
        </ErrorBoundary>
    </Provider>,
    document.getElementById('root')
);