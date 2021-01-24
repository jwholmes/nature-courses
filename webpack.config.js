const path = require('path');
const webpack = require('webpack');
const NodePolyfillPlugin = require("node-polyfill-webpack-plugin")
const BrowserSyncPlugin = require('browser-sync-webpack-plugin');

module.exports = {
    entry: './src/index.js',
    mode: 'development',
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /(node_modules|bower_components)/,
                loader: 'babel-loader',
                options: {
                    presets: [
                        ['@babel/preset-env', { targets: "defaults" }],
                    ]
                }
            }
        ],
    },
    resolve: {
        extensions: ['*', '.js', '.jsx'],
        fallback: {
            "fs": false,
            "child_process": false,
            "worker_threads": false
        }
    },
    output: {
        path: path.resolve(__dirname, 'public'),
        filename: 'bundle.js'
    },
    devtool: 'eval-source-map',
    devServer: {
        contentBase: path.join(__dirname, 'public/')
        // port: 3000,
        // publicPath: 'http://localhost:3000/dist/',
        // hotOnly: true,
    },
    plugins: [
        new NodePolyfillPlugin(),
        new webpack.HotModuleReplacementPlugin(),
        new BrowserSyncPlugin({
            host: 'localhost',
            port: 8080,
            proxy: 'http://localhost:3000/',
        }),
    ],
};