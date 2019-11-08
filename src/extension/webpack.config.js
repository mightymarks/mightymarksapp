require('ts-node').register({
	files: true,
	compilerOptions: {
		module: 'commonjs',
		target: 'es2017',
	},
})

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

const DIST = path.resolve(__dirname, '..', '..', 'dist', 'extension')

module.exports = (env = { dev: true }) => ({
	mode: env.prod ? 'production' : 'development',
	devtool: env.prod ? 'source-map' : 'inline-cheap-module-source-map',
	context: path.join(__dirname),
	entry: {
		background: './background/index.ts',
		popup: './popup/index.tsx',
	},
	output: {
		filename: '[name].js',
		path: DIST,
	},
	module: {
		rules: [
			{
				test: /\.[tj]sx?$/i,
				exclude: /node_modules/,
				use: [
					// 'cache-loader',
					'babel-loader',
					{
						loader: 'linaria/loader',
						options: {
							sourceMap: env.dev,
						},
					},
				],
			},
			{
				test: /\.css$/,
				use: [
					{
						loader: MiniCssExtractPlugin.loader,
						options: {
							hmr: env.dev,
						},
					},
					{
						loader: 'css-loader',
						options: {
							sourceMap: env.dev,
						},
					},
				],
			},
			{
				test: /\.svg$/,
				use: [
					'cache-loader',
					'babel-loader',
					{
						loader: 'react-svg-loader',
						options: {
							jsx: true,
						},
					},
				],
			},
		],
	},
	resolve: {
		extensions: ['.tsx', '.ts', '.js'],
		mainFields: ['module', 'browser', 'main'],
		alias: {
			react: 'preact/compat',
			'react-dom': 'preact/compat',
			'react-dom/server': 'preact/compat',
		},
	},
	plugins: [
		new CleanWebpackPlugin({
			cleanStaleWebpackAssets: false, // resolve conflict with `CopyWebpackPlugin`
		}),
		new FontConfigWebpackPlugin(),
		new WebpackExtensionManifestPlugin({
			config: { base: require('./manifest.ts').default },
		}),
		new CopyPlugin([
			{
				from: require.resolve('webextension-polyfill'),
				to: DIST,
			},
		]),
		new HtmlWebpackPlugin({
			filename: 'popup.html',
			chunks: ['popup'],
			inject: false,
			template: require('html-webpack-template'),
			appMountId: 'app',
		}),
		new MiniCssExtractPlugin({
			filename: 'styles.css',
		}),
		env.dev && new FriendlyErrorsWebpackPlugin(),
		env.dev &&
			new ExtensionReloader({
				port: 8080,
				entries: {
					background: 'background', // REQUIRED
					popup: 'popup',
				},
			}),
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
	].filter(Boolean),
	target: 'web',
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
		port: 8001,
	},
})
