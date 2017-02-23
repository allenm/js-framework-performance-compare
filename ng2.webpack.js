var webpack = require('webpack');
var path = require("path");
var UglifyJSPlugin = require('uglifyjs-webpack-plugin');
var WrapperPlugin = require('wrapper-webpack-plugin');

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
        "ng2-hello": "./app/ng2/hello.ts",
        "ng2-polyfill": "./app/ng2/polyfill.ts"
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
    }
}

if (process.env.NODE_ENV === 'production') {
    module.exports.entry = {
        "ng2-hello": "./app/ng2/hello.ts",
        "ng2-polyfill": "./app/ng2/polyfill-prod.ts"
    }
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
        new WrapperPlugin({
            header: 'var __t0=window.performance.now();\n',
            footer: 'console.log(window.performance.now()-__t0);'
        })
    ])
    module.exports.module.rules[1] = {
        test: /\.ts$/,
        use: ['babel-loader','awesome-typescript-loader']
    }
}
