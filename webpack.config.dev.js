var path = require('path');

var webpackMerge = require('webpack-merge');
var commonConfig = require('./webpack.config.common.js');

// merges this configuration with webpack.config.common.js and specifies what should be overwritten
module.exports = webpackMerge(commonConfig, {
    devtool: 'cheap-module-eval-source-map', //specifies the source map

    // specifies where the output file should be stored and how chunk files should be named
    output: {
        path: path.resolve(__dirname + '/public/js/app'),
        publicPath: "/js/app/",
        filename: 'bundle.js',
        publicPath: '/js/app/',
        chunkFilename: '[id].chunk.js'
    },

    // specifies loader for .ts files
    module: {
        rules: [
            {
                test: /\.ts$/,
                use: [
                    {loader: 'awesome-typescript-loader', options: {
                        transpileOnly: true
                    }},
                    {loader: 'angular2-template-loader'},
                    {loader: 'angular-router-loader'}
                ]
            }
        ]

    }
});