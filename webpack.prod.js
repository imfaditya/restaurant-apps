const path = require('path');
const { merge } = require('webpack-merge');
const common = require('./webpack.common');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
const WebpackPwaManifest = require('webpack-pwa-manifest');
const WorkboxWebpackPlugin = require('workbox-webpack-plugin');

module.exports = merge(common, {
  mode: 'production',
  devtool: 'source-map',
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'babel-loader',
            options: {
              presets: ['@babel/preset-env'],
            },
          },
        ],
      },
    ],
  },
  plugins: [
    new BundleAnalyzerPlugin(),
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
          destination: path.join('images/icon'),
          sizes: [96, 128, 144, 192, 256, 384, 512],
          purpose: 'maskable',
        },
        {
          src: path.resolve(__dirname, 'src/public/images/icon/eat-yuk-icon.png'),
          destination: path.join('images/icon'),
          sizes: [96, 128, 144, 192, 256, 384, 512],
          purpose: 'any',
        }
      ],
    }),
    new WorkboxWebpackPlugin.GenerateSW({
      swDest: './sw.bundle.js',
    }),
  ]
});
