import webpackMerge from 'webpack-merge';

import commonConfig from './webpack.config.common';
import {
    context,
    devtool,
    entry,
    name,
    output,
    optimization,
    plugins,
    target
} from './configuration';

const type = 'client';

export default webpackMerge(commonConfig(type), {
    context: context(type),
    devtool,
    entry: entry(type),
    name: name(type),
    output: output(type),
    optimization,
    plugins: plugins(type),
    target: target(type)
});