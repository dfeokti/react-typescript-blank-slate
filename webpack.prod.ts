import path from 'path';
import HtmlWebPackPlugin from 'html-webpack-plugin';
import { DefinePlugin } from 'webpack';

const htmlPlugin = new HtmlWebPackPlugin({
  template: './index.html',
  favicon: './public/favicon.ico',
});

const config = {
  mode: 'production',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
    assetModuleFilename: '[name][ext][query]',
    publicPath: '/',
    clean: true,
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
        type: 'asset',
        generator: {
          filename: 'fonts/[name][ext][query]',
        },
      },
      {
        test: /\.jpg$/,
        type: 'asset',
        generator: {
          filename: 'images/[name][ext][query]',
        },
      },
    ],
  },
  plugins: [htmlPlugin, new DefinePlugin({})],
};

export default config;
