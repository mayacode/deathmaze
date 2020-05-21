const path = require('path');
const HTMLWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: 'development',
  devtool: 'inline-source-map',
  entry: [path.resolve(__dirname, 'src/index.js')],
  output: {
    path: path.resolve(__dirname, '../dist/client'),
    filename: 'bundle.js',
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
      },
    ],
  },
  devServer: {
    publicPath: '/',
    contentBase: path.resolve(__dirname, '../dist/client'),
    watchContentBase: true,
    compress: true,
    historyApiFallback: true,
    port: 8081,
  },
  plugins: [
    new HTMLWebpackPlugin({
      template: './client/static/index.html',
      filename: 'index.html',
    }),
  ],
};
