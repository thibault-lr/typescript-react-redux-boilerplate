const WebpackMerge = require('webpack-merge');
const common = require('./webpack.common.js');
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const TerserPlugin = require('terser-webpack-plugin');

module.exports = WebpackMerge(common, {
  mode: 'production',
  devtool: false,

  plugins: [
    new MiniCssExtractPlugin({
      filename: '[name].[hash].css',
      chunkFilename:  '[id].[hash].css'
    }),
  ],
  optimization: {
    runtimeChunk: 'single',
    splitChunks: {
      cacheGroups: {
        vendor: {
          test: /[\\/]node_modules[\\/]/,
          name: 'vendors',
          enforce: true,
          chunks: 'all'
        }
      }
    },
    minimizer: [
      new TerserPlugin()
    ]
  }
})