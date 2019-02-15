import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { AppContainer } from 'react-hot-loader';

import configureStore from '@configureStore';

import App from './client/App';

const store = configureStore(window.initialState);

const rootElement = document.querySelector('#root');

const renderApp = Component => {
    render(
        <AppContainer>
            <Provider store={store}>
                <Component />
            </Provider>
        </AppContainer>,
    rootElement
    );
};

renderApp(App);

if (module.hot) {
    module.hot.accept('./client/App', () => {
        renderApp(require('./client/App').default);
    });
}