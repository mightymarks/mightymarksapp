require('ts-node').register({
	files: true,
	compilerOptions: {
		module: 'commonjs',
		target: 'es2017',
	},
})

require('dotenv').config()
const path = require('path')

const webpackMerge = require('webpack-merge')
const SizePlugin = require('size-plugin')
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer')
const TerserPlugin = require('terser-webpack-plugin')
const FriendlyErrorsWebpackPlugin = require('friendly-errors-webpack-plugin')
const SimpleProgressWebpackPlugin = require('simple-progress-webpack-plugin')

const DIST = path.resolve(__dirname, 'dist')

const common = env => ({
	mode: env.prod ? 'production' : 'development',

	devtool: env.prod ? 'source-map' : 'inline-cheap-module-source-map',

	output: {
		filename: '[name].js',
		path: DIST,
	},

	module: {
		rules: [
			{
				test: /\.[tj]sx?$/i,
				exclude: /node_modules/,
				use: ['babel-loader'],
			},
		],
	},

	resolve: {
		extensions: ['.tsx', '.ts', '.js'],
		mainFields: ['module', 'browser', 'main'],
	},

	plugins: [
		env.dev && new FriendlyErrorsWebpackPlugin(),
		env.prod &&
			new BundleAnalyzerPlugin({
				analyzerMode: 'static',
				defaultSizes: 'parsed',
				openAnalyzer: false,
			}),
		env.prod &&
			new SizePlugin({
				exclude: '{report,browser-polyfill}.*',
				filename: '../../.cache/size-plugin.json',
			}),
		env.prod &&
			new SimpleProgressWebpackPlugin({
				format: 'minimal',
			}),
	].filter(Boolean),

	watch: env.dev,
	performance: false,
	stats: env.dev ? 'none' : 'errors-warnings',

	optimization: {
		minimize: env.prod,
		minimizer: [
			new TerserPlugin({
				test: /\.[tj]sx?$/i,
				sourceMap: true,
			}),
		],
	},

	devServer: {
		quiet: true,
		writeToDisk: true,
		disableHostCheck: true,
	},
})

module.exports = (env = { dev: true }) => [
	webpackMerge.smart(
		common(env),
		require('./src/extension/webpack.config')(env),
	),
	webpackMerge.smart(
		common(env),
		require('./src/firebase-functions/webpack.config')(env),
	),
]
