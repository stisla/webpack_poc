import * as webpack from "webpack";
import {Configuration} from "webpack";
import {resolve} from "path";

const config: Configuration = {
    mode: "development",
    bail: true,
    cache: true,
    devtool: "source-map",
    resolve: {
        extensions: [".ts", ".js"],
        modules: [resolve(__dirname), "node_modules"]
    },
    entry: {
        app: [
            "./workspace/index.ts",
        ]
    },
    output: {
        path: resolve("./build/public"),
        publicPath: "/public/",
        filename: "dist.js",
        pathinfo: true
    },
    devServer: {
        contentBase: ["./workspace", "./build"],
        watchContentBase: true,
        hot: true,
        historyApiFallback: {
            disableDotRule: true,
        }
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin()
    ],
    module: {
        rules: [
            {
                test: /\.eot(\?.*)?$/,
                loader: 'file-loader?name=fonts/[hash].[ext]'
            },
            {
                test: /\.(woff|woff2)(\?.*)?$/,
                loader: 'file-loader?name=fonts/[hash].[ext]'
            },
            {
                test: /\.ttf(\?.*)?$/,
                loader: 'url-loader?limit=10000&mimetype=application/octet-stream&name=fonts/[hash].[ext]'
            },
            {
                test: /\.svg(\?.*)?$/,
                loader: 'url-loader?limit=10000&mimetype=image/svg+xml&name=fonts/[hash].[ext]'
            },
            {
                test: /\.ts$/,
                loader: "awesome-typescript-loader",
                exclude: /node_modules/
            },
            {
                test: /\.scss/,
                loaders: [
                    "style-loader",
                    "css-loader",
                    "sass-loader"
                ]
            }
        ]
    }
};
module.exports = config;
