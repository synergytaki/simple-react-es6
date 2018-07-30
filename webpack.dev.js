const path = require('path');
const config = require('./webpack.base');

// 開発ビルドはpublicフォルダに出力
const basePath = process.cwd();
config.entry = `${basePath}/src/main.jsx`;
config.output.path = `${basePath}/public`;
config.mode = 'development';

config.devServer = {
  contentBase: path.join(__dirname, 'public'),
  compress: true,
  port: 9090,
  host: '0.0.0.0',
  disableHostCheck: true
}

module.exports = config;