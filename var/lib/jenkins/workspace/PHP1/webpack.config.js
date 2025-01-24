const path = require('path');

module.exports = {
  entry: './src/index.js', // Entry file for your project
  output: {
    path: path.resolve(__dirname, 'dist'), // Output directory
    filename: 'bundle.js' // Output filename
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: 'babel-loader' // Optional, for transpiling JS
      }
    ]
  },
  resolve: {
    extensions: ['.js'] // File extensions to resolve
  },
  mode: 'development' // Or 'production' depending on your needs
};
