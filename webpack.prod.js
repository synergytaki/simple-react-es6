const config = require('./webpack.base');

const basePath = process.cwd();
config.output.path = `${basePath}/dist`;
config.mode = 'production';
config.performance = {
  hints: false,
};

// 製品ビルドにはReact関連のコードを除外
config.externals = {
  'react': {
    root: 'React',
    commonjs2: 'react',
    commonjs: 'react',
    amd: 'react'
  },
  './react': {
    root: 'React',
    commonjs2: 'react',
    commonjs: 'react',
    amd: 'react'
  },
  'react-dom': {
    root: 'ReactDOM',
    commonjs2: 'react-dom',
    commonjs: 'react-dom',
    amd: 'react-dom'
  },
  './react-dom': {
    root: 'ReactDOM',
    commonjs2: 'react-dom',
    commonjs: 'react-dom',
    amd: 'react-dom'
  },
  'react-transition-group': {
    root: 'ReactTransitionGroup',
    commonjs2: 'react-transition-group',
    commonjs: 'react-transition-group',
    amd: 'react-transition-group'
  },
  './react-transition-group': {
    root: 'ReactTransitionGroup',
    commonjs2: 'react-transition-group',
    commonjs: 'react-transition-group',
    amd: 'react-transition-group'
  },
};
// 製品ビルドはUMDモジュールとして出力
config.output.libraryTarget = "umd";

module.exports = config;