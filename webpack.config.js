var webpack = require('webpack');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  entry: './index.js',

  output: {
    filename: 'bundle.js',
    path: __dirname
  },

  module: {
    loaders: [
      {
        test: /.jsx?$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        query: {
          presets: ['es2015']
        }
      },
      {
        test: /\.scss$/,
        loader: ExtractTextPlugin.extract("style-loader", "css-loader!sass-loader")
      }
    ]
  },

  plugins: [
      new webpack.optimize.UglifyJsPlugin({
          compress: {
              warnings: false,
          },
          output: {
              comments: false,
          },
      }),
      new ExtractTextPlugin("bundle.css")
  ]
}
