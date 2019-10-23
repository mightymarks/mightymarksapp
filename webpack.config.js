const path = require('path')

const WebpackExtensionManifestPlugin = require('webpack-extension-manifest-plugin')
const FriendlyErrorsWebpackPlugin = require('friendly-errors-webpack-plugin')
const ExtensionReloader = require('webpack-extension-reloader')
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer')
const TerserPlugin = require('terser-webpack-plugin')

const DEV = process.env.NODE_ENV === 'development'

module.exports = {
	context: path.resolve(__dirname, 'src', 'extension'),
	entry: {
		background: './index.ts',
	},
	output: {
		path: path.resolve(__dirname, 'dist'),
		filename: '[name]/index.js',
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
	},
}
