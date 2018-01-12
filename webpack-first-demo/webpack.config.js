/**
 * Created by Administrator on 2018/1/5.
 */

const path = require("path");
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const webpack = require('webpack');

const config = {

    //入口
    entry: {
        // main: __dirname + "/src/index.js",
        app: __dirname + "/src/index.js",
        print: __dirname + "/src/print.js"
    },

    //出口
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "js/[name].bundle.js"
    },

    //bug 追踪
    devtool: 'inline-source-map',

    //热重载，实时监听
    devServer: {
        contentBase: "./dist",
        hot: true
    },

    //模块校验
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [
                    "style-loader",
                    "css-loader"
                ]
            },
            {
                test: /\.(png|jpg|svg)$/,
                use: [
                    "file-loader"
                ]
            }
        ]
    },

    //插件
    plugins: [
        new HtmlWebpackPlugin({
            title: "Output page"
        }),
        new CleanWebpackPlugin(['dist']),
        new webpack.NamedModulesPlugin(),
        new webpack.HotModuleReplacementPlugin()
    ]
};

module.exports = config;

