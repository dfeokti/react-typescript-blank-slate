import path from 'path';
import webpack from 'webpack';
import HtmlWebPackPlugin from 'html-webpack-plugin';
import { CleanWebpackPlugin } from 'clean-webpack-plugin';
import CopyWebpackPlugin from 'copy-webpack-plugin';

const htmlPlugin = new HtmlWebPackPlugin({
  template: './index.html',
  favicon: './public/favicon.ico',
});

const copyWebpackPlugin = new CopyWebpackPlugin({
  patterns: [
    { from: path.resolve(__dirname, 'static', 'images'), to: 'images' },
  ],
});

const config: webpack.Configuration = {
  mode: 'production',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
    assetModuleFilename: '[name][ext][query]',
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.json'],
  },

  module: {
    rules: [
      {
        test: /\.(ts|js)x?$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.woff2$/,
        type: 'asset/resource',
        generator: {
          filename: 'fonts/[name][ext][query]',
        },
      },
    ],
  },
  plugins: [htmlPlugin, new CleanWebpackPlugin(), copyWebpackPlugin],
};

export default config;
