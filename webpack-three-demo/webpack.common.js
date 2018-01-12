/**
 * Created by Administrator on 2018/1/8.
 */

const path = require("path");
const CleanWebpackPlugin = require('clean-webpack-plugin');//清空文件夹

module.exports = {

    // //入口
    // entry: {
    //     app: __dirname + "/src/index.js",
    // },

    //出口
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "js/[name].[chunkhash].bundle.js"
    },

    //module
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
        new CleanWebpackPlugin(['dist']),//清空文件夹

        // new webpack.NameModulesPlugin(),
        // new webpack.HotModuleReplacementPlugin(),
        // new UglifyJSPlugin()
    ]

};