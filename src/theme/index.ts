export const colors = {
	red: '#FF0040',
	yellow: '#F7FF3F',
	black: '#1D1616',
	orange: '#FF5108',
	blue: '#3E29EB',
	darkWhite: '#F9F9F7',
	white: '#FFFFFF',
	grey: [
		'#faf9f9',
		'#f0eced',
		'#e5dee0',
		'#dad0d3',
		'#cec0c3',
		'#c0aeb3',
		'#b09a9f',
		'#9d8289',
		'#80646c',
		'#4b3b3f',
	],
}

export const fonts = {
	sans:
		'-apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"',
	serif: '"Times New Roman", sans-serif',
	mono: '"Roboto Mono", Consolas, "Liberation Mono", Menlo, Courier, monospace',
}

export const fontSizes = [12, 14, 16, 20, 24, 32, 48, 64, 72, 96].map(
	size => `${size / 16}rem`,
)

export const space = [0, 4, 8, 16, 32, 64, 128, 256, 512].map(
	size => `${size / 16}rem`,
)

export const lineHeights = {
	hero: 1,
	heading: 1.4,
	text: 1.5,
}
