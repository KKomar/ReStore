import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Header from '../header';
import { HomePage, CartPage } from '../pages';
import CartTable from '../cart-table';

const App = () => {
    return (
        <main className='container'>
            <Header items={6} total={184} />
            <Switch>
                <Route exact path='/' component={ HomePage } />
                <Route path='/cart' component={ CartPage } />
                <Route path='*' render={() => <h1>404 Page not found</h1>} />
            </Switch>
            <CartTable />
        </main>
    );
};

export default App;