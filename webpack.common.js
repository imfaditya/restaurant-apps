const path = require('path');
const WebpackFavicons = require('webpack-favicons');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const WebpackPwaManifest = require('webpack-pwa-manifest');
const WorkboxWebpackPlugin = require('workbox-webpack-plugin');

module.exports = {
  entry: {
    app: path.resolve(__dirname, 'src/scripts/index.js'),
  },
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist'),
    clean: true,
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          {
            loader: 'style-loader',
          },
          {
            loader: 'css-loader',
          },
        ],
      },
    ],
  },
  plugins: [
    new WebpackFavicons({
      src: './src/public/images/favicon/favicon.png',
      path: './images/favicon',
      background: '#000',
      theme_color: '#000',
      icons: {
        favicons: true,
      },
    }),
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: path.resolve(__dirname, 'src/templates/index.html'),
    }),
    new CopyWebpackPlugin({
      patterns: [
        {
          from: path.resolve(__dirname, 'src/public/'),
          to: path.resolve(__dirname, 'dist/'),
        },
      ],
    }),
    new WebpackPwaManifest({
      publicPath: '.',
      filename: 'app.webmanifest',
      id: 'eat-yuk-v1',
      start_url: './index.html',
      name: 'Eat Yuk',
      short_name: 'EatYuk',
      description: 'The Best Restaurant Recommendation in Town',
      display: 'standalone',
      background_color: '#ffffff',
      theme_color: '#ff7300',
      crossorigin: 'use-credentials',
      icons: [
        {
          src: path.resolve(__dirname, 'src/public/images/icon/eat-yuk-icon.png'),
          sizes: [96, 128, 192, 256, 384, 512],
          purpose: 'maskable',
        },
      ],
    }),
    new WorkboxWebpackPlugin.GenerateSW({
      swDest: './sw.bundle.js',
    }),
  ],
};
