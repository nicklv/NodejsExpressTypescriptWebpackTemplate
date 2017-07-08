var path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: './bin/client/src/app/main.js',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, "bin/public")
    },
    resolve:{
        extensions: ['.ts', '.tsx', '.js']
    },
    module:{
        loaders:[
            { test: /\.tsx?$/, loader: "ts-loader" }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: 'client/src/index.html'
        })
    ]
};