import ExtractTextPlugin from 'extract-text-webpack-plugin';

const isProduction = process.env.NODE_ENV === 'production';

const rules = [
    {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: 'babel-loader'
    }
];

if (isProduction) {
    rules.push({
        test: /\.less/,
        use: ExtractTextPlugin.extract({
            fallback: 'style-loader',
            use: [
                'css-loader?minimize=true&modules=true&localIdentName=[name]_[local]_[hash:base64]',
                'less-loader'
            ]
        })
    });
} else {
    rules.push({
        test: /\.less/, // .scss - .styl - .less
        use: [
            {
                loader: 'style-loader'
            },
            {
                loader: 'css-loader',
                options: {
                    modules: true,
                    importLoaders: 1,
                    localIdentName: '[name]_[local]_[hash:base64]',
                    sourceMap: true,
                    minimize: true
                }
            },
            {
                loader: 'less-loader' // sass-loader, stylus-loader or less-loader
            }
        ]
    });
}

export default {
    rules
};