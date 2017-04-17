'use strict';
const webpack = require('webpack');
const ExtractTextPlugin = require("extract-text-webpack-plugin");

var config = {
  context: __dirname + '/src', // `__dirname` is root of project and `src` is source
  entry: {
    app: './app.js',
  },
  output: {
    path: __dirname + '/dist', // `dist` is the destination
    filename: 'bundle.js',
    publicPath: 'assets/',
  },
  module: {
    rules: [{
        test: /\.js$/, //Check for all js files
        use: [{
          loader: 'babel-loader',
          options: {
            plugins: ['transform-es2015-spread'],
            presets: ['es2015', 'react']
          }
        }]
      },
      {
          test: /\.less$/,
          use: ExtractTextPlugin.extract({ // See 'plugins' below.
            fallback: 'style-loader',
            use: ['css-loader', 'less-loader']
          })
      },
      {
        test: /\.json$/,
        loader: "json-loader" //JSON loader
      },
      { 
        test: /\.(jpe?g|png|gif|svg)$/,
        use: [
          {
            loader: 'url-loader',
            options: { limit: 40000 }
          },
          { 
            loader: 'image-webpack-loader',
            options: { bypassOnDebug: false }
          }
        ]
      }
    ]
  },
  plugins: [
    new ExtractTextPlugin({ // Use a plugin to extract to a separate css file.
      filename: 'style.css',
      disable: false,
      allChunks: true
    })
  ],
  devServer: {
    open: true, // to open the local server in browser
    contentBase: __dirname + '/src',
  },
  devtool: "eval-source-map" // Default development sourcemap
};

// Check if build is running in production mode, then change the sourcemap type
if (process.env.NODE_ENV === "production") {
  config.devtool = "source-map";

  // Can do more here
  // JSUglify plugin
  // Offline plugin
  // Bundle styles seperatly using plugins etc,
}

module.exports = config;