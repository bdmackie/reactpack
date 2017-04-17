'use strict';
var webpack = require('webpack');
const ExtractTextPlugin = require("extract-text-webpack-plugin");

var config = {
  context: __dirname + '/src', // `__dirname` is root of project and `src` is source
  entry: {
    app: './app.js',
  },
  output: {
    path: __dirname + '/dist', // `dist` is the destination
    filename: 'bundle.js',
    publicPath: '/assets',
  },
  module: {
    rules: [{
        test: /\.js$/, //Check for all js files
        use: [{
          loader: 'babel-loader',
          options: {
            presets: ['es2015']
          }
        }]
      },
      { 
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader'
        ]
      },
      {
          test: /\.less$/,
          use: ExtractTextPlugin.extract({
            fallback: 'style-loader',
            use: ['css-loader', 'less-loader']
          })
      },
      {
        test: /\.json$/,
        loader: "json-loader" //JSON loader
      }
    ]
  },
  plugins: [
    new ExtractTextPlugin({
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