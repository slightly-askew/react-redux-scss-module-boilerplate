require('react-hot-loader/patch');
let webpack = require('webpack');
const path = require('path');
const context = path.resolve(__dirname, 'src');


module.exports = {
  context,
  devtool: 'source-map',
  entry: [
    'react-hot-loader/patch',
    'webpack-hot-middleware/client?reload=true',
    './index',

  ],
  output: {
    path: path.join(__dirname, 'build'),
    filename: 'bundle.js',
    publicPath: '/build/'
  },
  module: {
    loaders: [

      //SCSS
      {
				test: /\.scss$/,
        include: path.resolve(__dirname, './src'),
        exclude: /node_modules/,
        loaders: [
          'style-loader',
          'css-loader?modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]',
          'postcss-loader',
          'sass-loader',
        ]
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
                  'generateScopedName': '[name]__[local]___[hash:base64:5]'
              }
            ]
          ]
        },
      },
    ]
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoEmitOnErrorsPlugin()
  ],
  stats: 'minimal',
};
