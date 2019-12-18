const merge = require('webpack-merge');
const baseWebpackConfig = require('./webpack.config.base');

const { CleanWebpackPlugin } = require('clean-webpack-plugin');

const prodWebpackConfig = merge(baseWebpackConfig, {
  mode: 'production',
  plugins: [
    new CleanWebpackPlugin()
  ]
})

module.exports = prodWebpackConfig;
