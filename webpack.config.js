const path = require('path');

module.exports = {
  entry: './src/index.ts',
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.css$/i,
        exclude: /node_modules/,
        use: [
          'style-loader',
          'css-loader',
          {
            loader: "postcss-loader",
          },
        ],
      },
    ],
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
    alias: {
      '@': path.resolve(__dirname, 'src/'),
      templator: path.resolve(__dirname, 'src/modules/templator'),
      classnames: path.resolve(__dirname, '/src/utils/classnames'),
      ryabact: path.resolve(__dirname, '/src/modules/Ryabact'),
      httptransport: path.resolve(__dirname, '/src/modules/HTTPTransport'),
      router: path.resolve(__dirname, '/src/modules/Router'),
    }
  },
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
};
