const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

// const cssRegex = /\.css$/
// const cssModuleRegex = /\.module\.css$/
// const postcssConfigPath = "postcss.config.js"

module.exports = {
  entry: {
    main: path.resolve(__dirname, './src/index.ts'),
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'webpack Boilerplate',
      template: path.resolve(__dirname, './src/index.html'), // шаблон
      filename: 'index.html', // название выходного файла
    }),
    new CleanWebpackPlugin(),
  ],
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.css$/,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              importLoaders: 1,
              modules: true,
            },
          },
          {
            loader: 'postcss-loader',
            options: {
              postcssOptions: {
                plugins: [
                  [
                    'postcss-preset-env',
                  ],
                ],
              },
            }
          }
        ],
        // include: cssModuleRegex
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
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].bundle.js',
  },
  devServer: {
    port: 3000,
  },
};
