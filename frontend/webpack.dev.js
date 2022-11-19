const path = require('path')
const { merge } = require('webpack-merge')
const common = require('./webpack.common.js')

module.exports = merge(common, {
  mode: 'development',
  devtool: 'inline-source-map',
  devServer: {
    host: '0.0.0.0',
    port: 3001,
    headers: {
      'Access-Control-Allow-Origin': '*',
    },
    devMiddleware: {
      index: true,
      mimeTypes: { phtml: 'text/html' },
      publicPath: path.join(__dirname, '../backend/public/bundle.js'),
      serverSideRender: true,
      writeToDisk: (filePath) => {
        return !/hot-update/i.test(filePath)
      },
    },
    historyApiFallback: true,
  },
})

console.log('==================================')
console.log('Webpack initialized in development')
console.log('==================================')
