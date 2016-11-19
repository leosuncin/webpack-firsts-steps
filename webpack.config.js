const resolve = require('path').resolve
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
	entry: {
		main: [
			'webpack/hot/dev-server',
			`webpack-dev-server/client?http://0.0.0.0:8080/`,
			resolve('src/scripts/main.js'),
		],
	},
	output: {
		path: resolve('dist'),
		filename: '[name]-[hash].js',
		publicPath: '/',
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