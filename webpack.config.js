const path = require('path');

module.exports = {
  entry: './src/index.js', // entry point of your application
  output: {
    path: path.resolve(__dirname, 'dist'), // output directory
    filename: 'bundle.js', // output bundle filename
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader', // transpile JavaScript using Babel
        },
      },
    ],
  },
  resolve: {
    extensions: ['.js'],
  },
  devtool: 'source-map', // source maps for easier debugging
};
