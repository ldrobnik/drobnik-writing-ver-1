var webpack = require('webpack');

module.exports = {
    entry: {
        'app': './assets/app/main.ts' // the file that starts the app
    },

    // tells webpack which file extensions to resolve
    resolve: {
        extensions: ['.js', '.ts']
    },

    // setting up loaders for .html. .css, .png and .jpg files
    module: {
        rules: [
            {
                test: /\.html$/,
                use: [{ loader: 'html-loader' }]
            },
            {
                test: /\.css$/,
                use: [{ loader: 'raw-loader' }] // simply copies any .css files
            },
            {
                test: /\.png$/,
                use: [{ loader: 'raw-loader' }] // same with .pgn files
            },
            {
                test: /\.jpg$/,
                use: [{ loader: 'raw-loader' }] // same with .pgn files
            }
        ],
        exprContextCritical: false

    }
};