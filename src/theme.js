exports.colors = {
	red: '#FF0040',
	yellow: '#F7FF3F',
	black: '#1D1616',
	orange: '#FF5108',
	blue: '#3E29EB',
	darkWhite: '#F9F9F7',
	white: '#FFFFFF',
}

exports.fonts = {
	sans:
		'-apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"',
	serif: '"Times New Roman", sans-serif',
	mono: '"Roboto Mono", Consolas, "Liberation Mono", Menlo, Courier, monospace',
}

exports.fontSizes = [12, 14, 16, 20, 24, 32, 48, 64, 72, 96].map(
	size => `${size / 16}rem`,
)

exports.space = [0, 4, 8, 16, 32, 64, 128, 256, 512].map(
	size => `${size / 16}rem`,
)

exports.lineHeights = {
	hero: 1,
	heading: 1.4,
	text: 1.5,
}
