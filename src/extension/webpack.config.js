const path = require('path')

const CopyPlugin = require('copy-webpack-plugin')
const WebpackExtensionManifestPlugin = require('webpack-extension-manifest-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const FontConfigWebpackPlugin = require('font-config-webpack-plugin')
const ScssConfigWebpackPlugin = require('scss-config-webpack-plugin')
const ExtensionReloader = require('webpack-extension-reloader')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

const DIST = path.resolve(__dirname, '..', '..', 'dist', 'extension')

module.exports = env => ({
	target: 'web',

	context: __dirname,

	entry: {
		background: './background/index.ts',
		popup: './popup/index.tsx',
	},

	output: {
		path: DIST,
	},

	module: {
		rules: [
			{
				test: /\.[tj]sx?$/i,
				exclude: /node_modules/,
				use: [
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
		alias: {
			react: 'preact/compat',
			'react-dom': 'preact/compat',
			'react-dom/server': 'preact/compat',
		},
	},

	plugins: [
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
		env.dev &&
			new ExtensionReloader({
				port: 8080,
				entries: {
					background: 'background', // REQUIRED
					popup: 'popup',
				},
			}),
	].filter(Boolean),

	devServer: {
		port: 8001,
	},
})
