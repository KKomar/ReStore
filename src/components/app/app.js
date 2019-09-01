import React from 'react';
import { Route, Switch } from 'react-router-dom';

import { HomePage, CartPage } from '../pages';

const App = () => {
    return (
        <div>
            <Switch>
                <Route exact path='/' component={ HomePage } />
                <Route path='/cart' component={ CartPage } />
                <Route path='*' render={() => <h1>404 Page not found</h1>} />
            </Switch>
        </div>
    );
};

export default App;