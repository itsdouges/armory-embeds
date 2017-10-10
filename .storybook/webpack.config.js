const autoprefixer = require('autoprefixer');
const ManifestPlugin = require('webpack-manifest-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const paths = require('../config/paths');

// you can use this file to add your custom webpack plugins, loaders and anything you like.
// This is just the basic way to add additional webpack configurations.
// For more information refer the docs: https://storybook.js.org/configurations/custom-webpack-config

// IMPORTANT
// When you add this file, we won't add the default configurations which is similar
// to "React Create App". This only has babel loader to load JavaScript.

module.exports = {
  plugins: [
    new ManifestPlugin({
      fileName: 'embeds-manifest.json',
    }),

    new ExtractTextPlugin({
      filename: 'gw2a-embeds.css',
      allChunks: true,
    }),

    new CopyWebpackPlugin([{
      from: 'node_modules/armory-component-ui/images',
      to: 'images',
    }]),
  ],

  module: {
    rules: [
      {
        test: /\.(png|jpg|gif|svg|eot|ttf|woff|woff2)$/,
        loader: 'url-loader',
        options: {
          limit: 10000,
          name: 'assets/[name].[ext]',
        }
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
                localIdentName: '[path][name]--[local]',
              },
            },
            'less-loader',
          ],
        }),
      },
    ],
  },
};
