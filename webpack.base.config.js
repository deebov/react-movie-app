const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const webpack = require('webpack');
const merge = require('webpack-merge');
const CopyWebpackPlugin = require('copy-webpack-plugin');

const PATHS = {
  DEVELOPMENT: path.resolve(__dirname, 'src'),
  PRODUCTION: path.resolve(__dirname, 'dist')
};

const indexJS = path.resolve(__dirname, PATHS.DEVELOPMENT, 'index.js');

module.exports = env => {
  const { MODE } = env;
  return merge({
    devtool: MODE === 'development' ? 'cheap-module-eval-source-map' : false,
    entry: ['@babel/polyfill', indexJS],
    output: {
      path: PATHS.PRODUCTION,
      filename: 'index.bundle.js',
      chunkFilename: '[id].js',
      publicPath: '/'
    },
    resolve: {
      extensions: ['.js', '.jsx'],
      modules: [PATHS.DEVELOPMENT, 'node_modules']
    },
    module: {
      rules: [
        {
          test: /\.(js|jsx)$/,
          exclude: /node_modules/,
          use: ['babel-loader', 'eslint-loader']
        },
        {
          test: /\.css$/,
          use: [
            {
              loader:
                MODE === 'production'
                  ? MiniCssExtractPlugin.loader
                  : 'style-loader'
            },
            {
              loader: 'css-loader',
              options: {
                importLoaders: 1,
                modules: true,
                localIdentName: '[name]__[local]__[hash:base64:5]'
              }
            }
          ]
        }
      ]
    },
    plugins: [
      new HtmlWebpackPlugin({
        template: path.resolve(__dirname, PATHS.DEVELOPMENT, 'index.html')
      }),
      new CopyWebpackPlugin([
        {
          from: path.resolve(__dirname, PATHS.DEVELOPMENT, 'assets'),
          to: path.resolve(__dirname, PATHS.PRODUCTION, 'static')
        }
      ]),
      new webpack.DefinePlugin({
        'process.env.MODE': JSON.stringify(MODE)
      })
    ]
  });
};
