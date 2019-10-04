const toEm = (pixels: number) => `${pixels / 16}em`

const breakpoints = [320, 375, 425, 768, 1024, 1440].map(toEm)

const breakpointNames = [
	'mobileS',
	'mobileM',
	'mobileL',
	'tablet',
	'laptop',
	'laptopL',
]
breakpointNames.forEach((id, i) => (breakpoints[id] = breakpoints[i]))

export default {
	colors: {
		red: '#FF0040',
		yellow: '#F7FF3F',
		black: '#302627',
		orange: '#FF5108',
		blue: '#3E29EB',
		darkWhite: '#F9F9F7',
		white: '#FFFFFF',
	},
	breakpoints,
	fonts: {
		sans:
			'-apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"',
		serif: '"Times New Roman", sans-serif',
		mono: '"SF Mono", Consolas, "Liberation Mono", Menlo, Courier, monospace',
	},
	fontSizes: [12, 14, 16, 20, 24, 32, 48, 64, 72, 96],
	space: [0, 4, 8, 16, 32, 64, 128, 256, 512],
	lineHeights: {
		hero: 1,
		heading: 1.4,
		text: 1.5,
	},
}
