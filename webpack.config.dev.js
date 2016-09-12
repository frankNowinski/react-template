import path from 'path';
import webpack from 'webpack';

export default {
  entry: [
    path.join(__dirname, '/client/index.js')
  ],
  plugins: [
    new webpack.NoErrorsPlugin(),
    new webpack.optimize.OccurenceOrderPlugin()
  ],
  output: {
    path: '/',
    publicPath: '/'
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        include: [
          path.join(__dirname, 'client'),
          path.join(__dirname, 'server/shared')
        ],
        loaders: ['babel']
      }
    ]
  },
  resolve: {
    extentions: ['', '.js']
  },
  devtools: 'eval-source-map',
  node: {
    net: 'empty',
    dns: 'empty'
  }
}
