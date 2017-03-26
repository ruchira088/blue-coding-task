const path = require("path")
const ExtractTextPlugin = require("extract-text-webpack-plugin")

const appPath = path.join(__dirname, "app")

module.exports = {
    entry: path.join(__dirname, "app", "Entry.jsx"),
    output: {
        path: path.join(__dirname, "public", "build"),
        filename: "js/bundle.js",
        publicPath: "/build/"
    },
    devtool: "source-map",
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
            styles: path.join(appPath, "styles"),
            services: path.join(appPath, "services"),
            libs: path.join(appPath, "libs"),
            constants: path.join(appPath, "constants")
        }
    },
    plugins: [
        new ExtractTextPlugin("css/styles.css")
    ]

}