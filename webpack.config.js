const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

const webpack = require('webpack')

module.exports = {
  entry: './src/index.tsx',
  mode : process.env.NODE_ENV === "staging" ? "development" : "production",

  devtool : process.env.NODE_ENV === "staging" ? "source-map" : false,
  
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/
      },
      {
        test: /\.module\.s(a|c)ss$/,
        loader: [
          process.env.NODE_ENV === "staging" ? 'style-loader' : MiniCssExtractPlugin.loader,
          {
            loader: 'css-loader',
            options: {
              modules: true,
              localIdentName: '[name]__[local]___[hash:base64:5]',
              camelCase: true,
              sourceMap: process.env.NODE_ENV === "staging"
            }
          },
          {
            loader: 'sass-loader',
            options: {
              sourceMap: process.env.NODE_ENV === "staging"
            }
          }
        ]
      },
      {
        test: /\.s(a|c)ss$/,
        exclude: /\.module.(s(a|c)ss)$/,
        loader: [
          process.env.NODE_ENV === "staging" ? 'style-loader' : MiniCssExtractPlugin.loader,
          'css-loader',
          {
            loader: 'sass-loader',
            options: {
              sourceMap: process.env.NODE_ENV === "staging"
            }
          }
        ]
      }
    ]
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js', '.scss']
  },
  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    watchContentBase: true
    // publicPath: './src',

  },
  output: {
    filename: '[name].[hash].bundle.js',
    path: path.resolve(__dirname, 'dist'),
    chunkFilename: '[name].[hash].bundle.js',
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: "TLR _ Resume",
      template : path.resolve(__dirname, "public", "index.html")
    }),
    new webpack.HotModuleReplacementPlugin(),
    new MiniCssExtractPlugin({
      filename: process.env.NODE_ENV === "staging" ? '[name].css' : '[name].[hash].css',
      chunkFilename: process.env.NODE_ENV === "staging" ? '[id].css' : '[id].[hash].css'
    })
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
    }
  }
};