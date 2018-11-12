const path = require('path')
const nodeExternals = require('webpack-node-externals')
const webpack = require('webpack')
const merge = require('webpack-merge')
const UglifyJSPlugin = require('uglifyjs-webpack-plugin')
const commonConfig = require('./common.config.js')


const clientConfig = merge(commonConfig, {
  entry: './app/client/index.js',
  output: {
    path: path.resolve(__dirname, '..', 'dist', 'client'),
    filename: 'bundle.js',
    publicPath: '/'
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      },
    ]
  },
  plugins: [
    new webpack.DefinePlugin({
      __isBrowser__: "true"
    }),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('production')
    }),
    new UglifyJSPlugin({ })
  ]
})

const serverConfig = merge(commonConfig, {
  entry: './app/server/index.js',
  target: 'node',
  externals: [
    nodeExternals()
  ],
  output: {
    path: path.resolve(__dirname, '..', 'dist', 'server'),
    filename: 'server.js',
    publicPath: '/'
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ['css-loader']
      }
    ]
  },
  plugins: [
    new webpack.DefinePlugin({
      __isBrowser__: "false"
    }),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('production')
    }),
  ]
})

module.exports = [
  clientConfig,
  serverConfig
]
