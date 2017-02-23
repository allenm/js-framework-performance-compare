var path = require('path');

module.exports = {
    "devServer": {
        "publicPath": "/no/",
        "contentBase": ["./html", "./"],
        "compress": true,
        "port": 9000
    },
    "entry": {
        "test": "./placeholder.js"
    },
    "output": {
        filename: "[name].js",
        path: path.resolve(__dirname, "dist")
    }
}
