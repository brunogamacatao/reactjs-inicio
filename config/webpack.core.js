'use strict';

const webpack = require('webpack');
const validate = require('webpack-validator');
const HtmlPlugin = require('html-webpack-plugin');
const autoprefixer = require('autoprefixer');
const path = require('path');

module.exports = validate({
  output: {
    path: path.join(__dirname, '../build'),
    filename: '[name]-[hash].js'
  },

  plugins: [
    new HtmlPlugin({
      title: 'Aula 11',
      template: path.join(__dirname, '../src', 'html', 'template.html')
    })
  ],

  eslint: {
    configFile: path.join(__dirname, './eslint.core.js'),
    useEslintrc: false
  },

  module: {
    preLoaders: [
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        include: /src/,
        loader: 'eslint'
      }
    ],
    loaders: [
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        include: /src/,
        loader: 'babel'
      },
      {
        test: /\.styl$/,
        loaders: [
          'style-loader',
          'css-loader?modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]',
          'postcss-loader',
          'stylus-loader'
        ]
      },
      {
        test: /\.json$/,
        loader: 'json'
      },
      {
        test: /\.(woff|woff2)(\?v=\d+\.\d+\.\d+)?$/,
        loader: 'url',
        query: {
          limit: 10000,
          mimetype: 'application/font-woff'
        }
      },
      {
        test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/,
        loader: 'url',
        query: {
          limit: '10000',
          mimetype: 'application/octet-stream'
        }
      },
      {
        test: /\.eot(\?v=\d+\.\d+\.\d+)?$/,
        loader: 'file'
      },
      {
        test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,
        loader: 'svg-url',
        query: {
          limit: '10000',
          mimetype: 'application/svg+xml'
        }
      },
      {
        test: /\.(png|jpg)$/,
        loader: 'url',
        query: {
          limit: 8192
        }
      },
      {
        test: /\.ico(\?v=\d+\.\d+\.\d+)?$/,
        loader: 'url'
      }
    ]
  },

  postcss: () => {
    return [autoprefixer];
  },

  node: {
    dns: 'empty',
    net: 'empty',
    tls: 'empty'
  },

  resolve: {
    alias: {
      src: path.join(__dirname, '../src'),
      components: path.join(__dirname, '../src', 'components')
    }
  }
});
