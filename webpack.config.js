const path = require('path')

const CopyPlugin = require('copy-webpack-plugin')
const WebpackExtensionManifestPlugin = require('webpack-extension-manifest-plugin')
const FriendlyErrorsWebpackPlugin = require('friendly-errors-webpack-plugin')
const ExtensionReloader = require('webpack-extension-reloader')
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer')
const TerserPlugin = require('terser-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')

require('dotenv').config()

const DEV = process.env.NODE_ENV === 'development'

const DIST = path.resolve(__dirname, 'dist')

module.exports = {
	context: path.resolve(__dirname, 'src', 'extension'),
	entry: {
		background: './background.ts',
		popup: './popup.tsx',
	},
	output: {
		path: DIST,
		filename: '[name].js',
	},
	module: {
		rules: [
			{
				test: /\.tsx?|\.jsx?$/,
				use: [
					{
						loader: 'babel-loader',
					},
				],
				exclude: /node_modules/,
			},
		],
	},
	resolve: {
		extensions: ['.tsx', '.ts', '.js'],
		mainFields: ['module', 'browser', 'main'],
	},
	mode: DEV ? 'development' : 'production',
	devtool: DEV ? 'inline-source-map' : false,
	plugins: [
		new WebpackExtensionManifestPlugin({
			config: { base: require('./src/extension/manifest.js') },
		}),
		new HtmlWebpackPlugin({
			filename: 'popup.html',
			chunks: ['popup'],
			inject: false,
			template: require('html-webpack-template'),
			appMountId: 'app',
		}),
		new CopyPlugin([
			{
				from: require.resolve('webextension-polyfill'),
				to: DIST,
			},
		]),
		DEV
			? null
			: new BundleAnalyzerPlugin({
					analyzerMode: 'static',
					defaultSizes: 'parsed',
					openAnalyzer: false,
			  }),
		DEV ? new FriendlyErrorsWebpackPlugin() : null,
		DEV
			? new ExtensionReloader({
					entries: {
						background: 'background', // REQUIRED
					},
			  })
			: null,
	].filter(Boolean),
	watch: DEV,
	target: 'web',
	optimization: {
		minimizer: [
			DEV
				? null
				: new TerserPlugin({
						test: /\.tsx?|\.jsx?$/i,
				  }),
		].filter(Boolean),
	},
	performance: {
		hints: false,
	},
	stats: DEV ? 'none' : 'normal',
	devServer: {
		quiet: true,
		writeToDisk: true,
		disableHostCheck: true,
	},
}
