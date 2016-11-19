const resolve = require('path').resolve

module.exports = {
	entry: {
		main: resolve('src/scripts/main.js'),
	},
	output: {
		path: resolve('dist'),
		filename: '[name]-[hash].js',
	},
}