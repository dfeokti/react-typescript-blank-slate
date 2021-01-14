import webpack from 'webpack';
import HtmlWebPackPlugin from 'html-webpack-plugin';
import path from 'path';

const htmlPlugin = new HtmlWebPackPlugin({
  template: './index.html',
  favicon: './public/favicon.ico',
});

const config: webpack.Configuration = {
  mode: 'development',
  devtool: 'source-map',
  devServer: {
    compress: true,
    open: true,
    host: 'localhost',
    // types not up to date yet
    // @ts-ignore
    static: path.resolve(__dirname, 'static'),
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
      },
    ],
  },
  plugins: [htmlPlugin],
};

export default config;
