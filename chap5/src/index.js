import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';

import './index.css';
import * as serviceWorker from './serviceWorker';
import configureStore from './shared/redux/configureStore';
import AppRoutes from './routes';

const store = configureStore(window.initialState);
const rootElement = document.getElementById('root');

const renderApp = Component => {
    render(
        <Provider store={store}>
            <Router>
                <Component />
            </Router>
        </Provider>,
        rootElement
    );
};

renderApp(AppRoutes);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
