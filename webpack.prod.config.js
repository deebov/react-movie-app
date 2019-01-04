const merge = require('webpack-merge');
const baseConfig = require('./webpack.base.config');

// Plugins
const autoprefixer = require('autoprefixer');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const prodConfig = env => {
  return merge([
    {
      module: {
        rules: [
          {
            test: /\.css$/,
            use: [
              {
                loader: 'postcss-loader',
                options: {
                  ident: 'postcss',
                  plugins: () => [
                    autoprefixer({
                      browsers: ['> 1%', 'last 2 versions']
                    })
                  ]
                }
              }
            ]
          }
        ]
      },
      plugins: [
        new CleanWebpackPlugin(['dist']),
        new MiniCssExtractPlugin(),
        new OptimizeCssAssetsPlugin()
      ]
    }
  ]);
};

module.exports = env => merge.smart(baseConfig(env), prodConfig(env));
