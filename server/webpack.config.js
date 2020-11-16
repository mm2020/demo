const path = require('path');
const nodeExternals = require('webpack-node-externals');

module.exports = {
  // mode: 'production' | 'development' | 'none',
  entry: {
    bundle: './src/index.ts',
  },
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'server.js',
  },
  target: 'node',
  externals: [nodeExternals()],
  resolve: {
    modules: ['node_modules'],
    extensions: ['.ts', '.js'],
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        use: {
          loader: 'ts-loader',
        },
      },
    ],
  },
};
