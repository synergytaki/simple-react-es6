const path = require('path');
const basePath = process.cwd();

module.exports = {
  entry: {
    index: `${basePath}/src/components/index.jsx`,
    "Hello/index": `${basePath}/src/components/Hello/Hello.jsx`,
    "Hello2/index": `${basePath}/src/components/Hello2/Hello2.jsx`,
  },

  output: {
    path: `${basePath}/core`,
    filename: "[name].js",
  },
  module: {
    rules: [
      // babel loader
      {
        test: /.jsx?$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        query: {
          presets: ['es2015', 'react']
        }
      },
    ],
  },
  resolve: {
    extensions: ['.js', '.jsx'],
  }
};
