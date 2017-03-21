const path = require("path")
const ExtractTextPlugin = require("extract-text-webpack-plugin")

module.exports = {
    entry: path.join(__dirname, "app", "Entry.jsx"),
    output: {
        path: path.join(__dirname, "public", "build", "js"),
        filename: "bundle.js",
        publicPath: "/build/js/"
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                loader: "babel-loader"
            },
            {
                test: /\.scss$/,
                use: ExtractTextPlugin.extract({
                    use: [
                        "css-loader",
                        "sass-loader"
                    ]
                })
            }
        ]
    },
    resolve: {
        alias: {
            styles: path.join(__dirname, "app", "styles")
        }
    },
    plugins: [
        new ExtractTextPlugin("styles.css")
    ]

}