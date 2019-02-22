import express from 'express';
import path from 'path';
import webpackDevMiddleware from 'webpack-dev-middleware';
import webpackHotMiddleware from 'webpack-hot-middleware';
import webpackHotServerMiddleware from 'webpack-hot-server-middleware';
import webpack from 'webpack';

import { isMobile, isBot } from '@utils/device';

import clientRender from './render/clientRender';

import apiController from './controllers/api';

import webpackConfig from '@webpack';

const isProduction = process.env.NODE_ENV === 'production';

const app = express();

const compiler = webpack(webpackConfig);

// Routes
app.use('/api', apiController);

app.use(express.static(path.join(__dirname, '../../public')));

app.use((req, res, next) => {
    req.isMobile = isMobile(req.headers['user-agent']);

    // We detect if a search bot is accessing...
    req.isBot = isBot(req.headers['user-agent']);
    next();
});

if (!isProduction) {
    // Hot Module Replacement
    app.use(webpackDevMiddleware(compiler));
    app.use(webpackHotMiddleware(
        compiler.compilers.find(compiler => compiler.name === 'client'))
    );
} else {
    // GZip Compression just for Production
    app.get('*.js', (req, res, next) => {
        req.url = `${req.url}.gz`;
        res.set('Content-Encoding', 'gzip');
        next();
    });
}

// Client Side Rendering
app.use(clientRender());

if (isProduction) {
    try {
        // eslint-disable-next-line
        const serverRender = require('../../dist/server.js').default;

        app.use(serverRender());
    } catch (e) {
        throw e;
    }
}

// For Server Side Rendering on Development Mode
app.use(webpackHotServerMiddleware(compiler));

app.disable('x-powered-by');

app.listen(3000);