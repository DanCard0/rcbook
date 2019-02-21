import CompressionPlugin from 'compression-webpack-plugin';
import ExtractTextPlugin from 'extract-text-webpack-plugin';
import webpack from 'webpack';
import WebpackNotifierPlugin from 'webpack-notifier';
import { BundleAnalyzerPlugin } from 'webpack-bundle-analyzer';

const isDevelopment = process.env.NODE_ENV !== 'production';

const isAnalyzer = process.env.ANALYZER === 'true';

export default type => {
    const plugins = [
        new ExtractTextPlugin({
            filename: '../../public/css/style.css'
        })
    ];

    if (isAnalyzer) {
        plugins.push(
            new BundleAnalyzerPlugin()
        );
    }

    if (isDevelopment) {
        plugins.push(
            new webpack.HotModuleReplacementPlugin(),
            new webpack.NoEmitOnErrorsPlugin(),
            new WebpackNotifierPlugin({
                title: 'DanCard'
            })
        );
    } else {
        plugins.push(
            new CompressionPlugin({
                asset: '[path].gz[query]',
                algorithm: 'gzip',
                test: /\.js$|\.css$|\.html$/,
                threshold: 10240,
                minRatio: 0.8
            })
        );
    }

    return plugins;
};