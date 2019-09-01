import React from 'react';

import ErrorBoundary from '../error-boundary';
import { BookstoreProvider } from '../service-context';
import BookstoreService from '../../services/bookstore-service';

const App = () => {
    return (
        <ErrorBoundary>
            <BookstoreProvider value={ new BookstoreService() }>
                <div>
                    <h1>App component</h1>
                </div>
            </BookstoreProvider>
        </ErrorBoundary>
    );
};

export default App;