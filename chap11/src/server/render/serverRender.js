import React from 'react';
import { renderToString } from 'react-dom/server';
import { Provider } from 'react-redux';

import configureStore from '@configureStore';

import App from '../../client/App';
import html from './html';

import initialState from './initialState';

export default function serverRender() {
    return (req, res, next) => {
        // Configuring Redux Store
        const store = configureStore(initialState(req));

        const markup = renderToString(
            <Provider store={store}>
                <App
                    server
                    location={req.url}
                />
            </Provider>
        );
        res.send(html({
            title: 'DanCard',
            markup,
            initialState: initialState(req)
        }));
    };
}