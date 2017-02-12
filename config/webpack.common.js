var webpack = require('webpack');
var ContextReplacementPlugin = require('webpack/lib/ContextReplacementPlugin');
var CommonsChunkPlugin = require('webpack/lib/optimize/CommonsChunkPlugin');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var helpers = require('./helpers');

module.exports = {
	entry: {
		'polyfills': './src/polyfills.ts',
		'vendor': './src/vendor.ts',
		'app': './src/main.ts'
	},

	resolve: {
		extensions: ['.ts', '.js', '.json']
	},

	module: {
		rules: [
			{
				test: /\.ts$/,
				loaders: [
					{
						loader: 'awesome-typescript-loader',
						options: {configFileName: helpers.root('tsconfig.json')}
					},
					'angular2-template-loader',
					'angular-router-loader'
				]
			},
			{
				test: /\.html$/,
				loader: 'html-loader'
			},
			{
				test: /\.(png|jpe?g|gif|svg|woff|woff2|ttf|eot|ico)$/,
				loader: 'file-loader?name=assets/[name].[hash].[ext]'
			},
			{
				test: /\.scss$/,
				exclude: helpers.root('src', 'app'),
				loader: ExtractTextPlugin.extract({fallbackLoader: 'style-loader', loader: 'css-loader!sass-loader'})
			},
			{
				test: /\.scss$/,
				include: helpers.root('src', 'app'),
				loader: 'raw-loader!sass-loader'
			}
		]
	},

	plugins: [
		// Workaround for angular/angular#11580
		new ContextReplacementPlugin(
			// The (\\|\/) piece accounts for path separators in *nix and Windows
			/angular(\\|\/)core(\\|\/)(esm(\\|\/)src|src)(\\|\/)linker/,
			helpers.root('./src'), // location of your src
			{} // a map of your routes
		),

		new CommonsChunkPlugin({
			name: ['app', 'vendor', 'polyfills']
		}),

		new HtmlWebpackPlugin({
			template: 'src/index.html'
		})
	]
};