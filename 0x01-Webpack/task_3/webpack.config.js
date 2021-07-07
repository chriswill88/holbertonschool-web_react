const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
    entry: {
      header: './modules/header/header.js',
      body: './modules/body/body.js',
      footer: './modules/footer/footer.js',
    },
    output: {
      path: path.resolve(__dirname, 'public'),
      filename: '[name].bundle.js',
    },
    devServer: {
      contentBase: './deploy',
      open: true,
      port: 8564
    },
    mode: 'development',
    module: {
      rules: [
        {
          test: /\.css$/i,
          use: ["style-loader", "css-loader"],
        },
        {
          test: /\.(?:ico|gif|png|jpg|jpeg)$/i,
          type: 'file-loader',
        },
        {
          test: /\.(jpg|png|gif|svg)$/,
          loader: 'image-webpack-loader',
          // Specify enforce: 'pre' to apply the loader
          // before url-loader/svg-url-loader
          // and not duplicate it in rules with them
          enforce: 'pre'
        }
      ],
    },
    plugins: [
      new HtmlWebpackPlugin(),
      new CleanWebpackPlugin(),
    ],
    devtool: "inline-source-map",
  };
