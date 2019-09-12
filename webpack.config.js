const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

const webpack = require('webpack')

console.log(__dirname);


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
        test: /\.scss$/,
        exclude: /node_modules/,
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: "css-loader",
            query: {
              sourceMap: true
            }
          },
          {
            loader: "sass-loader",
            query: {
              sourceMap: true,
              sassOptions : {
                includePaths: [path.resolve(__dirname, "src", "scss")]
              }
              
            }
          }
        ]
      }
    ]
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js', '.scss'],
    alias : {
      components: path.resolve(__dirname, "src","components"),
      layouts: path.resolve(__dirname, "src","layouts"),
      scss : path.resolve(__dirname, "src","scss")
    }
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