const path = require('path');
const webpack = require('webpack');
const VueLoaderPlugin = require('vue-loader/lib/plugin')

const config = {
  mode: 'development',
  entry: {
    app: './src/app.js'
  },
  output: {
    path: path.resolve(__dirname, 'lib'),
    filename: 'app.js',
    publicPath: 'lib/'
  },
  devtool: 'inline-source-map',
  module: {
    rules: [
      {
        test: /.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [
              [
                "@babel/preset-env", {
                  exclude: [

                  ]
                }
              ]
            ],
            plugins: [
              ["@babel/plugin-transform-runtime", {
                "regenerator": true,
              }]
            ]
          }
        }
      },
      {
        test: /\.css$/,
        loader: "style-loader!css-loader"
      },
      {
        test: /\.vue$/,
        loader: 'vue-loader'
      },
      {
        test: /\.(woff|woff2|eot|ttf|svg)(\?.*$|$)/,
        loader: 'file-loader'
      }
    ]
  },
  resolve: {
    alias: {
      fields$: path.resolve(__dirname, 'field-components', '__index.js')
    }
  },
  plugins: [
    new webpack.optimize.LimitChunkCountPlugin({
      maxChunks: 1
    }),
    // make sure to include the plugin!
    new VueLoaderPlugin()
  ]
};






module.exports = config;
