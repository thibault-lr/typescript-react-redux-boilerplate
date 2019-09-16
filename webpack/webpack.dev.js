const path = require('path');
const webpack = require('webpack');
const WebpackMerge = require('webpack-merge');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const common = require('./webpack.common.js');

module.exports = WebpackMerge(common, {
  mode: 'development',
  devtool: 'source-map',
  devServer: {
    contentBase: path.join(__dirname, '', 'dist'),
    watchContentBase: true,
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new MiniCssExtractPlugin({
      filename: '[name].css',
      chunkFilename: '[id].css',
    }),
  ],
});
