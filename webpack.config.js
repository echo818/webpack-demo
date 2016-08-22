var webpack = require('webpack');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
	entry: './src/main.js',
	output: {
		path: './dist',
		publicPath: 'dist/',
		filename: '[name].js'
	},
	module: {
		loaders: [
			{
				test: /\.css$/,
				loader: ExtractTextPlugin.extract('style-loader','css-loader')
			}
		]
	},
	plugins: [
		new ExtractTextPlugin('css/common.css'),
		new webpack.HotModuleReplacementPlugin()
	],
	resolve: {
		extensions: ['','.js']
	},
	devServer: {
		inline: true,
		hot: true
	}
}