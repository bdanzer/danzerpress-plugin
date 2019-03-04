const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const debug = process.env.NODE_ENV !== 'production';
const webpack = require('webpack');

var extractBlockSCSS = new MiniCssExtractPlugin({
  filename: "./plugin.min.css",
})

var plugins = [
    extractBlockSCSS
];

var scssConfig = [
    {
        loader: process.env.NODE_ENV !== 'production' ? 'style-loader' : MiniCssExtractPlugin.loader,
    }, 
    {
      loader: 'css-loader',
      options: {
        sourceMap: true
      }
    },
    {
      loader: 'sass-loader',
      options: {
        sourceMap: true
      }
    }
];

var config = {
    context: __dirname,
    devtool: debug ? 'inline-sourcemap' : false,
    mode: debug ? 'development' : 'production',
    entry: './resources/js/entry.js',
    output: {
        path: __dirname + '/dist/',
        filename: 'plugin.min.js'
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: [
                    {
                        loader: 'babel-loader'
                    }
                ]
            },
            {
                test: /plugin\.scss$/,
                exclude: /node_modules/,
                use: scssConfig
            }
        ]
    },
    plugins: plugins
};

module.exports = (env, argv) => {
    return config;
};