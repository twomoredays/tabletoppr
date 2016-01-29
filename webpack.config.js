const path = require('path');
const webpack = require('webpack');
const merge = require('webpack-merge');

const TARGET = process.env.npm_lifecycle_event;

const PATHS = {
  app: path.join(__dirname, 'app'),
  build: path.join(__dirname, 'build')
};

process.env.BABEL_ENV = TARGET;

const common = {
  // Entry accepts a path or an object of entries.
  entry: PATHS.app,
  // Add resolve.extensions
  // '' is needed to allow imports without extension
  // . needed before extensions or match will fail
  resolve: {
    extensions: ['', '.js', '.jsx']
  },
  output: {
    path: PATHS.build,
    filename: 'bundle.js'
  },

  module: {
    preLoaders: [
      {
        test: /\.jsx?$/,
        loaders: ['eslint'],
        include: PATHS.app
      }
    ],

    loaders: [
      {
        // Expects a RegExp
        test: /\.css$/,
        loaders: ['style', 'css'],
        // Include accepts eith a path or an array of paths.
        include: PATHS.app
      },
      {
        test: /\.jsx?$/,
        loaders: ['babel?cacheDirectory'],
        include: PATHS.app
      }
    ]
  }
};

// Default configuration
if (TARGET === 'start' || !TARGET) {
  module.exports = merge(common, {
    devtool: 'eval-source-map',
    devServer: {
      contentBase: PATHS.build,

      // Enable API fallback so HTML5 History API based
      // routing works. This is a good default.
      historyApiFallback: true,
      hot: true,
      inline: true,
      progess: true,

      // Display only errors to reduce output
      status: 'errors-only',

      // Parse host and port from env for customization
      host: process.env.HOST,
      port: process.env.PORT
    },
    plugins: [
      new webpack.HotModuleReplacementPlugin()
    ]
  });
}

if (TARGET === 'build') {
  module.exports = merge(common, {});
}