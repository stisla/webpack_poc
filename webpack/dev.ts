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
