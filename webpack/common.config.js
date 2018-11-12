const path = require('path')
const CleanWebpackPlugin = require('clean-webpack-plugin')


module.exports = {
  module: {
    rules: [
      { test: /\.(js)$/, use: 'babel-loader' },
    ]
  },
  resolve: {
    alias: {
      components: path.resolve(__dirname, '..', 'app/shared/components/'),
      containers: path.resolve(__dirname, '..', 'app/shared/containers/'),
      shared: path.resolve(__dirname, '..', 'app/shared/')
    }
  },
  plugins: [
    new CleanWebpackPlugin(
      [
        'dist/'
      ],
      {
        root: path.resolve(__dirname , '..')
      }
    )
  ]
}
