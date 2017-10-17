'use strict';

const webpack = require('webpack');
const validate = require('webpack-validator');
const HtmlPlugin = require('html-webpack-plugin');
const DashboardPlugin = require('webpack-dashboard/plugin');
const path = require('path');
const merge = require('webpack-merge');
const core = require('./webpack.core');

module.exports = validate(merge.smart(core, {
  devtool: 'source-map',

  entry: [
    'react-hot-loader/patch',
    'webpack-dev-server/client?http://localhost:3000',
    'webpack/hot/only-dev-server',
    path.join(__dirname, '../src', 'index')
  ],

  output: {
    publicPath: ''
  },

  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new DashboardPlugin()
  ],

  eslint: {
    configFile: path.join(__dirname, './eslint.dev.js')
  },

  module: {
    loaders: [
      {
        test: /\.css$/,
        include: /(node_modules|bower_components|src)/,
        loaders: ['style', 'css']
      }
    ]
  }
}));
