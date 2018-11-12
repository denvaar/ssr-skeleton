const path = require('path')
const nodeExternals = require('webpack-node-externals')
const webpack = require('webpack')
const merge = require('webpack-merge')
const CleanWebpackPlugin = require('clean-webpack-plugin')
const commonConfig = require('./common.config.js')


const clientConfig = {
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
    })
  ]
}

const serverConfig = {
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
    })
  ]
}

module.exports = [
  merge(commonConfig, clientConfig),
  merge(commonConfig, serverConfig)
]
