require('dotenv').config()
const { colors } = require('./src/theme')

const siteMetadata = {
	name: 'Mighty Marks',
	title: 'Synchronize bookmarks!',
	strapline: 'Cross-browser bookmark synching.',
	description: `Mighty Marks keeps your browser bookmarks in sync – in Chrome, Firefox, Edge, Opera, Brave and more (Safari coming soon).`,
	siteUrl: `https://mightymarks.app`,
	author: `@sndrs`,
	twitter: '@mightymarksapp',
}

module.exports = {
	siteMetadata,
	plugins: [
		'gatsby-plugin-react-helmet',
		'gatsby-plugin-typescript',
		'gatsby-plugin-preact',
		'gatsby-plugin-linaria',
	],
}
