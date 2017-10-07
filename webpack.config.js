var HTMLWebpackPlugin = require('html-webpack-plugin');
var HTMLWebpackPluginConfig = new HTMLWebpackPlugin({
	template: __dirname + '/app/index.html',
	filename: 'index.html',
	inject: 'body'
})
var CSSPlugin = new HTMLWebpackPlugin({
	template: __dirname + '/app/index.html',
	filename: 'index.html',
	inject: 'head'
})

module.exports = {
	entry: __dirname + '/app/index.js',
	module: {
		loaders: [
			{ test: /\.js$/, exclude: /node_modules/, loader: 'babel-loader' },
			{ test: /\.css$/, loader: 'style-loader'},
			{ test: /\.css$/, loader: 'css-loader'},
			{ test: /\.(png|woff|woff2|eot|ttf|svg|jpg)$/, loader: 'url-loader?limit=100000' }
		]
	},
	output: {
		filename: 'main.js',
		path: __dirname + '/build'
	},
	plugins: [HTMLWebpackPluginConfig]
}