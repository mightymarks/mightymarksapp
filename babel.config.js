module.exports = {
	presets: [
		[
			'@babel/preset-typescript',
			{
				allExtensions: true,
				isTSX: true,
			},
		],
		[
			'@babel/preset-env',
			{
				corejs: 3,
				modules: false,
				useBuiltIns: 'usage',
			},
		],
	],
}
