const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin')

const rootDir = path.resolve(__dirname, '..');

process.env.NODE_ENV = 'development';
const ENV = process.env.NODE_ENV;

module.exports = {
	entry: {
		ng1: './public/index.ts',
		app: './public/main.ts'
	},
	output: {
		path: path.join(rootDir, 'dist', 'dev'),
		publicPath: '/',
		filename: '[name].bundle.js',
		chunkFilename: '[id].chunk.js'
	},
	resolve: {
		extensions: ['.ts', '.js']
	},
	module: {
		rules: [
			{
				test: /\.ts$/,
				loaders: ['awesome-typescript-loader', 'angular2-template-loader']
			},
			{
				test: /\.html$/,
				loader: 'html-loader'
			}
		]
	},
	plugins: [
		new webpack.optimize.CommonsChunkPlugin({
			name: 'common',
			minChunks: Infinity
		}),
		new webpack.SourceMapDevToolPlugin({
			filename: '[file].map[query]',
			moduleFilenameTemplate: '[resource-path]',
			fallbackModuleFilenameTemplate: '[resource-path]?[hash]',
			sourceRoot: 'webpack:///'
		}),
		new HtmlWebpackPlugin({
			template: 'public/index.html',
		}),
		new webpack.DefinePlugin({
			'process.env': { ENV: JSON.stringify(ENV) }
		}),
		new webpack.ContextReplacementPlugin(
			/angular(\\|\/)core(\\|\/)@angular/,
			path.join(rootDir, 'src'),
			{}
		)
	]
}
