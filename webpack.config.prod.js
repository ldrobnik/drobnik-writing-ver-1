var path = require('path');

var webpack = require('webpack');
var webpackMerge = require('webpack-merge');
var commonConfig = require('./webpack.config.common.js');

// merges this configuration with commonConfig; the smart function merges loaders instead of simply overwritng them
module.exports = webpackMerge.smart(commonConfig, {
    entry: {
        'app': './assets/app/main.aot.ts' // ahead of time compilation entry file
    },

    output: {
        path: path.resolve(__dirname + '/public/js/app'),
        filename: 'bundle.js',
        publicPath: '/js/app/',
        chunkFilename: '[id].[hash].chunk.js' // hash value added to chunk file names
    },

    module: {
        rules: [
            {
                test: /\.ts$/,
                use: [
                    'awesome-typescript-loader',
                    'angular2-template-loader',
                    'angular-router-loader?aot=true'
                ]
            }
        ]
    },

    plugins: [
        // plugin used minify the code
        new webpack.optimize.UglifyJsPlugin({
            sourceMap: false
        })
    ]
});