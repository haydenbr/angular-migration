const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin')
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

const rootDir = path.resolve(__dirname, '..');

process.env.NODE_ENV = 'production';
const ENV = process.env.NODE_ENV;

module.exports = {
	entry: {
		ng1: './public/index.ts'
	},
	output: {
		path: path.join(rootDir, 'dist', 'prod'),
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
			name: 'ng1',
		}),
		new webpack.optimize.UglifyJsPlugin({
			beautify: false,
			comments: false,
			compress: {
				warnings: false
			},
			mangle: false // dont mangle parameter names
		}),
		new webpack.DefinePlugin({
			'process.env': { ENV: JSON.stringify(ENV) }
		}),

		// new BundleAnalyzerPlugin({ analyzerMode: 'static' })
	]
}
