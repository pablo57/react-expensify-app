const path = require('path');

// 2 must haves: entry -> output
// The entry point (where app kicks off). 
// Also tell it where to output the final bundle file.

// loader - lets you customize the behaviour of webpack when it loads a given file
// (how a file gets transformed when webpack uses it)

// devtool - use a sourcemap to make debugging easier (gives better console logs)

// devServer - use webpack's server that watches and rebuilds. Requires contentBase (the dir to serve)

module.exports = {
    entry: './src/app.js',
    output: {
        path: path.join(__dirname, 'public'),
        filename: 'bundle.js'
    },
    module: {
        rules: [{
            loader: 'babel-loader',
            test: /\.js$/,
            exclude: /node_modules/
        }, {
            test: /\.s?css$/,
            use: [
                'style-loader',
                'css-loader',
                'sass-loader'
            ]
        }]
    },
    devtool: 'cheap-module-eval-source-map',
    devServer: {
        contentBase: path.join(__dirname, 'public'),
        historyApiFallback: true
    }
};