import HtmlWebPackPlugin from 'html-webpack-plugin';
import { DefinePlugin } from 'webpack';

const htmlPlugin = new HtmlWebPackPlugin({
  template: './index.html',
  favicon: './public/favicon.ico',
});

const config = {
  mode: 'development',
  devtool: 'source-map',
  devServer: {
    compress: true,
    open: true,
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
        test: /\.(woff2|jpg)$/,
        type: 'asset',
      },
    ],
  },
  plugins: [htmlPlugin, new DefinePlugin({})],
  output: {
    publicPath: '/',
    clean: true,
  },
};

export default config;
