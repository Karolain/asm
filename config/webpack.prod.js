var webpackMerge = require('webpack-merge');
var DefinePlugin = require('webpack/lib/DefinePlugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var LoaderOptionsPlugin = require('webpack/lib/LoaderOptionsPlugin');
var UglifyJsPlugin = require('webpack/lib/optimize/UglifyJsPlugin');
var commonConfig = require('./webpack.common.js');
var helpers = require('./helpers');

const ENV = process.env.NODE_ENV = process.env.ENV = 'production';

module.exports = webpackMerge(commonConfig, {
	devtool: 'source-map',

	output: {
		path: helpers.root('dist'),
		publicPath: '/',
		filename: '[name].[hash].js',
		chunkFilename: '[id].[hash].chunk.js'
	},

	plugins: [
		new UglifyJsPlugin({ // https://github.com/angular/angular/issues/10618
			mangle: {
				keep_fnames: true
			}
		}),
		new ExtractTextPlugin('[name].[hash].css'),
		new DefinePlugin({
			'process.env': {
				'ENV': JSON.stringify(ENV)
			}
		}),
		new LoaderOptionsPlugin({
			htmlLoader: {
				minimize: false // workaround for ng2
			}
		})
	]
});