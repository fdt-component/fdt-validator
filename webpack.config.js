var path = require('path');
module.exports = {
  entry: {
    index: [
      './src/index.js'
    ],
    test: [
      './src/test.js'
    ]
  },
  output: {
    path: path.join(__dirname, 'dist'),
    filename: '[name].js',
    publicPath: '/dist/'
  },
  resolve: {
    modulesDirectories: ['node_modules', './src'],
    extensions: ['', '.js']
  },
  module: {
    loaders: [
      {
        test: /\.js?/,
        loaders: ['babel'],
        exclude: /node_modules/
      }
    ]
  }
}
