import React from 'react';

import { BookstoreConsumer } from '../service-context';

const withBookstoreService = () => (Wrapped) => {
    return (props) => {
        return (
            <BookstoreConsumer>
                {
                    (bookstoreService) => {
                        return (
                            <Wrapped { ...props } bookstoreService={ bookstoreService } />
                        );
                    }
                }
            </BookstoreConsumer>
        );
    };
};

export default withBookstoreService;