const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin')
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
const AotPlugin = require('@ngtools/webpack').AotPlugin;

const rootDir = path.resolve(__dirname, '..');

process.env.NODE_ENV = 'production';
const ENV = process.env.NODE_ENV;

module.exports = {
	entry: {
		pollyfills: './public/pollyfills.ts',
		app: './public/main.ts'
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
				loaders: ['@ngtools/webpack']
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
		new AotPlugin({
			tsConfigPath: './tsconfig.prod.json',
			entryModule: path.join(rootDir, 'public', 'app', 'app.module#AppModule')
		}),
		new HtmlWebpackPlugin({
			template: 'public/index.html',
			chunks: ['app']
		}),
		new webpack.optimize.UglifyJsPlugin({
			beautify: false,
			comments: false,
			compress: {
				warnings: false
			}
		}),
		new webpack.DefinePlugin({
			'process.env': { ENV: JSON.stringify(ENV) }
		}),
		new webpack.ContextReplacementPlugin(
			/angular(\\|\/)core(\\|\/)@angular/,
			path.join(rootDir, 'src'),
			{}
		),
		// new BundleAnalyzerPlugin({ analyzerMode: 'static' })
	]
}
