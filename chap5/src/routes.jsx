import React from 'react';
import { Route, Switch } from 'react-router-dom';

import App from './components/App';
import Home from './components/Home';
import Coins from './components/Coins';
import Error404 from './components/Error/404';

const AppRoutes = () => (
    <App>
        <Switch>
            <Route path="/" component={Home} exact />
            <Route path="/coins" component={Coins} exact />
            <Route component={Error404} />
        </Switch>
    </App>
);

export default AppRoutes;
