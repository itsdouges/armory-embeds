const path = require('path');
const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');
const ManifestPlugin = require('webpack-manifest-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const paths = require('./config/paths');

const config = {
  bail: true,

  context: __dirname,

  entry: {
    'armory-embeds': './src/index.js',
  },

  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].js',
    chunkFilename: '[name]-chunk.[chunkhash:8].js',
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
          name: 'images/gw2a--[hash:base64:8].[ext]',
        },
      },
      {
        test: /\.(eot|ttf|woff|woff2)$/,
        loader: 'file-loader',
        options: {
          name: '[name].[hash:8].[ext]',
        },
      },
    ],
  },

  plugins: [
    new ManifestPlugin({
      fileName: 'embeds-manifest.json',
      // We only care about the styles name, which we used
      // to dynamically load css on page load.
      filter: ({ name }) => name === 'armory-embeds.css',
    }),

    new webpack.optimize.CommonsChunkPlugin({
      minChunks: 2,
      async: true,
    }),

    new webpack.optimize.UglifyJsPlugin({
      sourceMap: true,
      parallel: true,
      compress: {
        screw_ie8: true,
        warnings: false,
        reduce_vars: false,
      },
      mangle: {
        screw_ie8: true,
      },
      output: {
        comments: false,
        screw_ie8: true,
      },
    }),

    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('production'),
    }),

    new webpack.optimize.ModuleConcatenationPlugin(),

    new ExtractTextPlugin({
      filename: 'gw2a-embeds.[contenthash:8].css',
      allChunks: true,
    }),

    new BundleAnalyzerPlugin({
      analyzerMode: 'static',
    }),

    new CopyWebpackPlugin([{
      from: 'node_modules/armory-component-ui/images',
      to: 'images',
    }]),
  ],
};

module.exports = config;
