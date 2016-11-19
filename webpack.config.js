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
			{
				test: /\.css$/i,
				loaders: [
					'style',
					'css?sourceMap',
				],
			},
			{
				test: /\.s[ac]ss$/i,
				loaders: [
					'style',
					'css',
					'sass?sourceMap',
				]
			},
			{
				test: /\.(jpg|jpeg|webp|png|gif|svg)/i,
				loader: 'file?name=images/[name].[ext]',
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