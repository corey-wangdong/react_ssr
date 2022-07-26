const path = require('path');

const nodeExternals = require('webpack-node-externals');

module.exports = {
  entry: {
    index: path.resolve(__dirname, '../server.js')
  },
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, '../dist/server')
  },
  mode: 'development',
  target: 'node',
  externals: [nodeExternals()],//保持node中require的引用方式
  resolve: {
    alias: {
      '@': path.resolve(__dirname, '../src')
    },
    extensions: ['.js']
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: 'babel-loader',
        exclude: /node_modules/
      }
    ]
  }
}
