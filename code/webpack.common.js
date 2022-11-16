const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const InterpolateHtmlPlugin = require("interpolate-html-plugin");
const webpack = require("webpack");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

const dotenv = require("dotenv");
dotenv.config();

module.exports = {
    mode: process.env.MODE,

    output: {
        path: path.join(__dirname, "/dist"),
        filename: "index.bundle.js",
        publicPath: "/",
    },

    devServer: {
        allowedHosts: "all",
        port: process.env.PORT,
        liveReload: true,
        historyApiFallback: true,
        historyApiFallback: {
            disableDotRule: true,
        },
    },

    resolve: {
        extensions: [".js", ".jsx", ".ts", ".tsx"],
    },

    module: {
        rules: [
            {
                test: /\.tsx?$/,
                exclude: /nodeModules/,
                use: ["babel-loader", "ts-loader"],
            },
            {
                test: /\.css$/,
                use: ["style-loader", "css-loader"],
            },
            {
                test: /\.(png|svg)$/,
                use: [
                    {
                        loader: "file-loader",
                        options: {
                            name: "images/[name].[ext]?[hash]",
                        },
                    },
                ],
            },
        ],
    },

    plugins: [
        new webpack.DefinePlugin({
            "process.env": JSON.stringify(process.env),
        }),
        new InterpolateHtmlPlugin({
            PUBLIC_URL: "static", // can modify `static` to another name or get it from `process`
        }),
        new HtmlWebpackPlugin({ template: "./public/index.html" }),
        new CleanWebpackPlugin(),
    ],
};
