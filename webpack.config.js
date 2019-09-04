const path = require("path")
const ImageminPlugin = require('imagemin-webpack-plugin').default
const imageminMozjpeg = require('imagemin-mozjpeg')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const HtmlMinifierPlugin = require('html-minifier-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const WebpackMd5Hash = require('webpack-md5-hash')
const CleanWebpackPlugin = require('clean-webpack-plugin')
const MiniCssExtractPlugin = require("mini-css-extract-plugin")
const VueLoaderPlugin = require('vue-loader/lib/plugin')


module.exports = {
    "entry": ["./src/js/main.js", "./src/scss/main.scss"],
    "output": {
        path: path.resolve(__dirname, './dist'),
        filename: 'js/main.js',
        publicPath: '/'
    },
    devtool: 'inline-source-map',
    devServer: {
        contentBase: false,
        open: true,
        overlay: {
            warnings: false,
            errors: true,
            quiet: true,
        }
    },
    module: {
        rules: [
            {
                test: /\.vue$/,
                loader: 'vue-loader'
            },
            {
                test: /\.m?js$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader",
                    options: {
                        presets: ["@babel/preset-env"]
                    }
                }
            },
            {
                test: /\.scss$/,
                use: [
                    'style-loader',
                    'vue-style-loader',
                    MiniCssExtractPlugin.loader,
                    'css-loader',
                    'postcss-loader',
                    'sass-loader'
                ]
            },
            {
              test: /\.html$/,
              use: [
                {
                  loader: "html-loader",
                  options: { minimize: true }
                }
              ]
            }
        ]
    },
    "plugins": [
        new VueLoaderPlugin(),
        new CleanWebpackPlugin("./dist", {}),
        new MiniCssExtractPlugin({
            filename: 'css/style.css'
        }),
        new CopyWebpackPlugin([{
            "from": "./src/images/",
            "to": "./build/images/"
        }]),
        new ImageminPlugin({
            test: /\.(jpe?g|png|gif|svg)$/i,
            optipng: {"optimizationLevel": 9},
            plugins: [
                imageminMozjpeg ({
                    quality: 80,
                    progresive: true
                })
            ]
        }),
        new HtmlWebpackPlugin({
            inject: false,
            hash: true,
            template: './src/index.html',
            filename: 'index.html'
        }),
        new HtmlMinifierPlugin(),
        new WebpackMd5Hash()
    ]
}