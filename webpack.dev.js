const webpackMerge = require('webpack-merge');
const common = require('./webpack.common.js');

process.env.BABEL_ENV = 'development';

module.exports = webpackMerge.merge(common, {
  mode: 'development',
  devtool: 'inline-source-map',
  resolve: {
    extensions: ['.js', '.ts', '.tsx'],
  },
  target: 'web'
});
