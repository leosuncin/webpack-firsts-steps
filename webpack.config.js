const resolve = require('path').resolve
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
	entry: {
		main: [
			'webpack/hot/dev-server',
			`webpack-dev-server/client?http://0.0.0.0:8080/`,
			'babel-polyfill',
			resolve('src/scripts/main.js'),
		],
	},
	output: {
		path: resolve('dist'),
		filename: '[name]-[hash].js',
		publicPath: '/',
	},
	devtool: 'source-map',
	module: {
		preLoaders: [
			{
				test: /\.js$/i,
				loader: 'eslint',
				exclude: /node_modules/,
			},
		],
		loaders: [
			{
				test: /\.js$/i,
				loader: 'babel',
				exclude: /node_modules/,
			},
		],
	},
	plugins: [
		new webpack.HotModuleReplacementPlugin(),
		new HtmlWebpackPlugin(),
	],
	devServer: {
		contentBase: resolve('dist'),
		hot: true,
		inline: true,
		open: true,
	},
}