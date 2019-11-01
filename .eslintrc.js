module.exports = {
	parser: '@typescript-eslint/parser',
	parserOptions: {
		ecmaFeatures: {
			jsx: true,
		},
		ecmaVersion: 2018,
		sourceType: 'module',
	},
	extends: [
		'plugin:@typescript-eslint/eslint-recommended',
		'plugin:react/recommended',
	],
	plugins: ['@typescript-eslint', 'react-hooks'],
	rules: { 'no-mixed-spaces-and-tabs': 0, 'react/react-in-jsx-scope': 0 },
	overrides: [
		{
			files: ['**/*.tsx'],
			rules: {
				'react/prop-types': 'off',
			},
		},
	],
	env: {
		browser: true,
		es6: true,
		node: true,
	},
	globals: {
		Atomics: 'readonly',
		SharedArrayBuffer: 'readonly',
	},
	settings: {
		react: {
			version: 'detect',
		},
	},
}
