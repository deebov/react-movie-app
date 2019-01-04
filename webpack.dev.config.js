const merge = require('webpack-merge');
const baseConfig = require('./webpack.base.config');
const path = require('path');
const webpack = require('webpack');

const devConfig = env => {
  return merge(baseConfig, {
    devServer: {
      publicPath: '/',
      historyApiFallback: true,
      contentBase: '/src',
      hot: true,
      clientLogLevel: 'none',
      stats: 'minimal',
      port: 3000,
      host: 'localhost',
      compress: true
    },
    plugins: [new webpack.HotModuleReplacementPlugin()]
  });
};

module.exports = env => merge(baseConfig(env), devConfig(env));
