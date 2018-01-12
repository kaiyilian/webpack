/**
 * Created by Administrator on 2018/1/8.
 */

const webpack = require('webpack');
const merge = require('webpack-merge');//合并 webpack
const HtmlWebpackPlugin = require('html-webpack-plugin');//生成HTML 模板
const common = require('./webpack.common.js');

//开发环境
module.exports = merge(common, {

    //入口
    entry: {
        index: __dirname + "/src/index.js",
        another: __dirname + "/src/another-module.js",
    },

    //bug 追踪
    devtool: 'inline-source-map',

    //热重载
    devServer: {
        contentBase: './dist'
    },

    plugins: [
        new HtmlWebpackPlugin({
            title: "devEnvironment"
        }),
        new webpack.optimize.CommonsChunkPlugin({
            name: 'common' // 指定公共 bundle 的名称。
        })
    ]

});