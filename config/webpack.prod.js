'use strict';

const webpack = require('webpack');
const validate = require('webpack-validator');
const HtmlPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const path = require('path');
const merge = require('webpack-merge');
const core = require('./webpack.core');

module.exports = validate(merge.smart(core, {
  entry: path.join(__dirname, '../src', 'index'),

  plugins: [
    new ExtractTextPlugin('[name]-[hash].css'),
    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': '"production"'
      }
    }),
    new webpack.optimize.UglifyJsPlugin({
      compress: { warnings: false }
    }),
    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.OccurrenceOrderPlugin()
  ],

  eslint: {
    configFile: path.join(__dirname, './eslint.dev.js')
  },

  module: {
    loaders: [
      {
        test: /\.css$/,
        include: /(node_modules|bower_components|src)/,
        loader: ExtractTextPlugin.extract('style', 'css')
      }
    ]
  }
}));
