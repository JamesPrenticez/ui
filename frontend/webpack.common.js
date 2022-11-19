const path = require('path')
const TerserPlugin = require('terser-webpack-plugin')
const Visualizer = require('webpack-visualizer-plugin2')
const { StatsWriterPlugin } = require('webpack-stats-plugin')

module.exports = {
  entry: ['./client/index.js'],
  // target: ['web', 'es5'],
  output: {
    path: path.join(__dirname, '../backend/public/'),
    publicPath: '/public/',
    filename: '[name].js',
    chunkFilename: '[name].bundle.js',
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader', 'postcss-loader'],
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/i,
        type: 'asset/resource',
        generator: {
          filename: 'fonts/[name][ext][query]',
        },
      },
    ],
  },
  resolve: {
    extensions: ['.js', '.jsx', '.css'],
  },
  optimization: {
    splitChunks: {
      cacheGroups: {
        reactVendor: {
          test: /[\\/]node_modules[\\/](react|react-dom|react-router-dom)[\\/]/,
          name: 'vendor-react',
          chunks: 'all',
        },
        corejsVendor: {
          test: /[\\/]node_modules[\\/](core-js)[\\/]/,
          name: 'vendor-corejs',
          chunks: 'all',
        },
      },
    },
    minimize: true,
    minimizer: [
      //To remove licences being output into public folder
      new TerserPlugin({
        extractComments: false,
        terserOptions: {
          format: {
            comments: false,
          },
        },
      }),
    ],
  },
  plugins: [
    new StatsWriterPlugin({
      filename: path.join('..', 'stats', 'log.json'),
      fields: null,
      stats: { chunkModules: true },
    }),

    new Visualizer({
      filename: path.join('..', 'stats', 'statistics.html'),
    }),
  ],
}
