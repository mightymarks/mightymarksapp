const path = require('path')

const nodeExternals = require('webpack-node-externals')

const CopyPlugin = require('copy-webpack-plugin')

const DIST = path.resolve(__dirname, '..', '..', 'dist', 'firebase-functions')

module.exports = env => ({
	target: 'node',

	context: __dirname,

	entry: { index: './index.ts' },

	output: {
		path: DIST,
	},

	externals: [nodeExternals()],

	plugins: [
		new CopyPlugin([
			{
				from: './package.json',
				to: DIST,
			},
		]),
	].filter(Boolean),

	devServer: {
		port: 8002,
	},
})
