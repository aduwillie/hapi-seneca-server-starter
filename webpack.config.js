import path from 'path';
import HtmlWebpackPlugin from 'html-webpack-plugin';

module.exports = {
	target: 'node',
	entry: path.resolve(__dirname, 'src/server'),
	output: {
		path: path.resolve(__dirname, 'dist'),
		filename: 'server.js',
		publicPath: '/dist'
	},
	plugins: [
		new HtmlWebpackPlugin({ 
			inject: true,
			template: path.resolve(__dirname, 'src/index.html'),
		})
	],
	module: {
		rules: [
			{ test: /\.js$/, exclude: [path.resolve(__dirname, 'node_modules')], loader: 'babel-loader' }
		]
	},
	resolve: {
		extensions: [ ".js", ".css" ],
	}
};
