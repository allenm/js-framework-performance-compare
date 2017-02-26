
var webpack = require('webpack');
var path = require("path");
var UglifyJSPlugin = require('uglifyjs-webpack-plugin');
var wrapper = require('./base.webpack').wrapper;

module.exports = {
    "devServer": {
        "publicPath": "/dist/",
        "contentBase": "./html",
        "compress": true,
        "port": 9000,
        "watchOptions": {
            poll: true
        }
    },
    "entry": {
        "react-hello": "./app/react/helloworld.tsx"
    },
    "output": {
        filename: "[name].js",
        path: path.resolve(__dirname , "dist")
    },
    devtool: "source-map",
    resolve: {
        extensions: [".webpack.js", ".web.js", ".ts", ".tsx", ".js"]
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                loader: 'source-map-loader',
                enforce: 'pre'
            },
            {
                test: /\.tsx$/,
                use: ['awesome-typescript-loader']
            },
            {
                test: /\.ts$/,
                use: ['awesome-typescript-loader']
            }
        ]
    }
}

if (process.env.NODE_ENV === 'production') {
    module.exports.devtool = 'hidden-source-map'
    module.exports.plugins = (module.exports.plugins || []).concat([
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': JSON.stringify('production'),
        }),
        new UglifyJSPlugin({
            compress: {
                screw_ie8: true,
                warnings: false,
                conditionals: true,
                unused: true,
                comparisons: true,
                sequences: true,
                dead_code: true,
                evaluate: true,
                if_return: true,
                join_vars: true,
                negate_iife: false
            },
            sourceMap: true
        }),
        wrapper
    ])
}
