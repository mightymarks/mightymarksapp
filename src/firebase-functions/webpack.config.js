require('dotenv').config()
const path = require('path')

const SizePlugin = require('size-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const CopyPlugin = require('copy-webpack-plugin')
const WebpackExtensionManifestPlugin = require('webpack-extension-manifest-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer')
const TerserPlugin = require('terser-webpack-plugin')
const FontConfigWebpackPlugin = require('font-config-webpack-plugin')
const ScssConfigWebpackPlugin = require('scss-config-webpack-plugin')
const FriendlyErrorsWebpackPlugin = require('friendly-errors-webpack-plugin')
const ExtensionReloader = require('webpack-extension-reloader')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

const DIST = path.resolve(__dirname, 'dist')

module.exports = (env = { dev: true }) => ({
	mode: env.prod ? 'production' : 'development',
	devtool: env.prod ? 'source-map' : 'inline-cheap-module-source-map',
	context: path.join(__dirname, 'src'),
	entry: {
		background: './extension/background/index.ts',
		popup: './extension/popup/index.tsx',
	},
	output: {
		filename: '[name].js',
		path: DIST,
	},
	module: {
		rules: [
			{
				test: /\.tsx?|\.jsx?$/,
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
		new CleanWebpackPlugin({
			cleanStaleWebpackAssets: false, // resolve conflict with `CopyWebpackPlugin`
		}),
	],
	target: 'web',
	watch: env.dev,
	performance: false,
	stats: env.dev ? 'none' : 'errors-warnings',
	devServer: {
		quiet: true,
		writeToDisk: true,
		disableHostCheck: true,
	},
})
