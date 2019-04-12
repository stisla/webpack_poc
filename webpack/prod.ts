import * as MiniCssExtractPlugin from "mini-css-extract-plugin";
import {Configuration} from "webpack";
import {resolve} from "path";

const config: Configuration = {
    mode: "production",
    bail: true,
    cache: true,
    devtool: "source-map",
    resolve: {
        extensions: [".scss"],
        modules: [resolve(__dirname), "node_modules"]
    },
    entry: {
        style: "./src/styles/main.scss",
        theme: "./src/styles/theme.scss",
        responsive: "./src/styles/responsive.scss",
        all: "./src/styles/all.scss",
    },
    output: {
        path: resolve("./build/public"),
        publicPath: "/public/",
    },
    plugins: [
        new MiniCssExtractPlugin({filename: "[name].css"})
    ],
    module: {
        rules: [
            {
                test: /\.scss/,
                loaders: [
                    MiniCssExtractPlugin.loader,
                    "css-loader",
                    "sass-loader"
                ]
            }
        ]
    }
};
module.exports = config;
