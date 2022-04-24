const HtmlWebpackPlugin = require('html-webpack-plugin');
const ModuleFederationPlugin = require('webpack').container.ModuleFederationPlugin;
const deps = require('./package.json').dependencies;
module.exports = {
  entry: './src/index',
  cache: false,

  mode: 'development',
  devtool: 'source-map',

  optimization: {
    minimize: false,
  },

  output: {
    publicPath: 'auto',
  },

  resolve: {
    extensions: ['.jsx', '.js', '.json', '.mjs'],
  },

  module: {
    rules: [
      {
        test: /\.m?js$/,
        type: 'javascript/auto',
        resolve: {
          fullySpecified: false,
        },
      },
      {
        test: /\.jsx?$/,
        loader: require.resolve('babel-loader'),
        exclude: /node_modules/,
        options: {
          presets: [require.resolve('@babel/preset-react')],
        },
      },
    ],
  },

  plugins: [
    new ModuleFederationPlugin({
      name: 'react_container',
      filename: 'remoteEntry.js',
      remotes: {
        remote_react: 'remote_react@http://localhost:3001/remoteEntry.js',
        remote_nextjs: 'remote_nextjs@http://localhost:3002/_next/static/chunks/remoteEntry.js',
      },
      exposes: {
        './react': 'react',
        './react-dom': 'react-dom',
        './Nav': './src/components/Nav',
      },
      shared: {
      },
    }),
    new HtmlWebpackPlugin({
      template: './public/index.html',
    }),
  ],
};
