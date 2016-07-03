const path = require('path')

module.exports = {
  entry: './src/index.jsx',
  output: {
    path: 'build',
    filename: 'bundle.js'
  },

  resolve: {
    extensions: ['', '.js', '.jsx']
  },

  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        presets: ['es2015', 'react']
      }
    ]
  }
}
