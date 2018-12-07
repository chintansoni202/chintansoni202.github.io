const Path = require('path');
const webpack = require('webpack');

const ExtractTextPlugin = require('extract-text-webpack-plugin');

const cssOutputPath = 'app.css';
const jsOutputPath = 'bundle.js';
const ExtractSASS = new ExtractTextPlugin(cssOutputPath);

const webpackConfig = {
  plugins: [],
  module: {
    // loaders: ['style-loader', 'css-loader', 'sass-loader'],
    loaders: [],
  },
};

webpackConfig.module.loaders.push({
  test: /\.scss$/,
  use: [{
    loader: 'style-loader',
  },
  {
    loader: 'css-loader',
  },
    // {
    //     loader: 'postcss-loader',
    // },
  {
    loader: 'sass-loader',
    options: {
      includePaths: [Path.resolve(__dirname, 'styles/*.scss')],
    },
  },

  ],
}, {
  test: /\.(eot|svg|ttf|woff|woff2)$/,
  loader: 'file?name=fonts/[name].[ext]',
}, {
  test: /\.(png|jpg)$/,
  loader: 'url-loader',
});
webpackConfig.entry = [Path.join(__dirname, './app.js')];
webpackConfig.output = {
  path: Path.join(__dirname, './dist'),
  filename: jsOutputPath,
};
webpackConfig.plugins.push(ExtractSASS);

module.exports = webpackConfig;
