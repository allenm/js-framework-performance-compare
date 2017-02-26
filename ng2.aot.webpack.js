var webpack = require('webpack');
var path = require("path");
var UglifyJSPlugin = require('uglifyjs-webpack-plugin');
var wrapper = require('./base.webpack').wrapper;

module.exports = {
    "entry": {
        "ng2-aot-hello": "./app/ng2/hello-aot.ts",
        "ng2-aot-polyfill": "./app/ng2/polyfill-prod.ts"
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
                test: /\.ts$/,
                use: ['awesome-typescript-loader']
            }
        ]
    },
    plugins: [
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
    ]
}
