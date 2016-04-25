var path = require('path');
var LiveReloadPlugin = require('webpack-livereload-plugin');

module.exports = {

  entry: [
    './client/app'
  ],

  output: {
    path: path.join(__dirname, 'client'),
    filename: 'build.js'
  },

  module: {
    loaders: [{
      test: /\.jsx?$/,
      exclude: /(node_modules|bower_components)/,
      loader: 'babel', // 'babel-loader' is also a legal name to reference
      query: {
        presets: ['es2015', 'react']
      }
    }]
  },

  resolve: {
    modulesDirectories: [path.join(__dirname, 'src'), 'node_modules']
  },
  
 
  plugins: [
    new LiveReloadPlugin({})
  ]
}
