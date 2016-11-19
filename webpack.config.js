const resolve = require('path').resolve
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
	entry: {
		main: resolve('src/scripts/main.js'),
	},
	output: {
		path: resolve('dist'),
		filename: '[name]-[hash].js',
		publicPath: '/',
	},
	plugins: [
		new HtmlWebpackPlugin(),
	],
}