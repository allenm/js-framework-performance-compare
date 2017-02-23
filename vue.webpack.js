var webpack = require('webpack');
var path = require("path");
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
        "vue-hello": "./app/vue/main.js"
    },
    "output": {
        filename: "[name].js",
        path: path.resolve(__dirname , "dist")
    },
    devtool: "source-map",
    resolve: {
        extensions: [".webpack.js", ".web.js", ".ts", ".js"],
        alias: {
            'vue$': 'vue/dist/vue.common.js'
        }
    },
    module: {
        rules: [
            {
                test: /\.vue$/,
                loader: 'vue-loader',
                options: {
                    loaders: {
                        'scss': 'vue-style-loader!css-loader!sass-loader',
                        'sass': 'vue-style-loader!css-loader!sass-loader?indentedSyntax'
                    }
                }
            },
            {
                test: /\.js$/,
                loader: 'babel-loader',
                exclude: /node_modules/
            },
            {
                test: /\.ts$/,
                use: ['awesome-typescript-loader']
            }
        ]
    }
}

if (process.env.NODE_ENV === 'production') {
    // http://vue-loader.vuejs.org/en/workflow/production.html
    delete module.exports.resolve.alias['vue$'];
    module.exports.plugins = (module.exports.plugins || []).concat([
        new webpack.DefinePlugin({
            'process.env': {
                NODE_ENV: '"production"'
            }
        }),
        new webpack.optimize.UglifyJsPlugin({
            sourceMap: true,
            compress: {
                warnings: false
            }
        }),
        new webpack.LoaderOptionsPlugin({
            minimize: true
        }),
        new WrapperPlugin({
            header: 'var __t0=window.performance.now();\n',
            footer: 'console.log(window.performance.now()-__t0);'
        })
    ])
}
