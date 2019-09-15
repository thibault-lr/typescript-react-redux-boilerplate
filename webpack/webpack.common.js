const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

console.log(__dirname)
module.exports = {
  entry : path.resolve(__dirname, '..', 'src', 'index.tsx'),

  output: {
    filename: '[name].[hash].bundle.js',
    path: path.resolve(__dirname, '..', 'dist'),
    chunkFilename: '[name].[hash].bundle.js',
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js', '.scss'],
    alias: {
      components: path.resolve(__dirname, "..","src", "components"),
      layouts: path.resolve(__dirname, "..","src", "layouts"),
      scss: path.resolve(__dirname, "..","src", "scss")
    }
  },
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
            loader: "postcss-loader",
            query : {
              sourceMap : true
            }
          },
          {
            loader: "sass-loader",
            query: {
              sourceMap: true,
              sassOptions: {
                includePaths: [path.resolve(__dirname, "..", "src", "scss")]
              }

            }
          }
        ]
      }
    ]
  },

  plugins: [
    new HtmlWebpackPlugin(({
      title : "Resume",
      template: path.resolve(__dirname, "..", "public", "index.html")
    }))
  ],

}