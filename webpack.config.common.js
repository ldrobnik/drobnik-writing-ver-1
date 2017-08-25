var webpack = require('webpack');

module.exports = {
    entry: {
        'app': './assets/app/main.ts' // the file that starts the app
    },

    // tells webpack which file extensions to resolve
    resolve: {
        extensions: ['.js', '.ts']
    },

    // tells webpack what to do with the files
    module: {
        rules: [
            {
                test: /\.html$/,
                use: [{ loader: 'html-loader' }]
            },
            {
                test: /\.css$/,
                use: [{ loader: 'raw-loader' }]
            }
        ],
        exprContextCritical: false

    }
};