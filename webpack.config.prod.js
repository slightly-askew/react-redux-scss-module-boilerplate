let webpack = require('webpack');

const path = require('path');
const context = path.resolve(__dirname, 'src');

const ExtractTextPlugin = require('extract-text-webpack-plugin');
const extractSCSS = new ExtractTextPlugin('styles.css');


module.exports = {
  context,
  devtool: 'source-map',
  entry: [
    'webpack-hot-middleware/client?reload=true',
    './index'
  ],
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: '/dist/'
  },
  module: {
    loaders: [

      //SCSS
      {
				test: /\.scss$/,
        include: path.resolve(__dirname, './src'),
        exclude: /node_modules/,
				use: extractSCSS.extract({
          fallbackLoader: 'style-loader',
            loader: [
              'css-loader?modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]',
              'postcss-loader',
              'sass-loader',
            ]
          })
			},
      //JS
      {
        test: /\.js$/,
        include: path.resolve(__dirname, './src'),
        loader: 'babel-loader',
        query: {
          plugins: [
            'transform-react-jsx',
            [
              'babel-plugin-react-css-modules',
              {
                context,
                'filetypes': {
                    '.scss': 'postcss-scss',
                  },
                  'webpackHotModuleReloading': 'true',
                  'generateScopedName': '[name]__[local]___[hash:base64:5]'
              }
            ]
          ]
        },
      },
    ]
  },
  plugins: [
    extractSCSS
  ,
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoEmitOnErrorsPlugin()
  ],
  stats: 'minimal',
};
