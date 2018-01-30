const path = require('path');
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');

module.exports = {
  entry: [
    './src/main.tsx',
  ],
  output: {
    filename: 'app.js',
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/dist/'
  },
  resolve: {
    extensions: ['.webpack.js', '.web.js', '.ts', '.tsx', '.js']
  },
  plugins: [
      new ForkTsCheckerWebpackPlugin()
  ],
  module: {
    rules: [{
      test: /.tsx?$/,
      use: [{ loader: 'ts-loader', options: { happyPackMode: true } }]
    }]
  },
  devServer: {
  },
  devtool: 'source-map',
}