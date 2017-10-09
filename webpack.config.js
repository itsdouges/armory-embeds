const path = require('path');
const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');
const ManifestPlugin = require('webpack-manifest-plugin');
const paths = require('./config/paths');

const config = {
  bail: true,

  context: __dirname,

  entry: {
    'armory-component-ui': './src/index.js',
  },

  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].js',
  },

  module: {
    strictExportPresence: true,

    rules: [
      {
        test: /\.js$/,
        include: paths.appSrc,
        loader: 'babel-loader',
      },
      {
        test: /\.(css|less)$/,
        include: [paths.appSrc, paths.appNodeModules],
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: [
            {
              loader: 'css-loader',
              options: {
                modules: true,
                importLoaders: '1',
                localIdentName: 'gw2a--[hash:base64:5]',
              },
            },
            'less-loader',
          ],
        }),
      },
      {
        test: /\.(png|jpg|gif|svg)$/,
        loader: 'url-loader',
        options: {
          limit: 100,
          name: 'images/gw2a--[hash:base64:5].[ext]',
        },
      },
      {
        test: /\.(eot|ttf|woff|woff2)$/,
        loader: 'file-loader',
        options: {
          name: '[name].[ext]',
        },
      },
    ],
  },

  plugins: [
    new ManifestPlugin({
      fileName: 'embeds-manifest.json',
    }),

    new webpack.optimize.ModuleConcatenationPlugin(),

    new ExtractTextPlugin({
      filename: 'gw2a-embeds.css',
      allChunks: true,
    }),

    new BundleAnalyzerPlugin({
      analyzerMode: 'static',
    }),
  ],
};

module.exports = config;
