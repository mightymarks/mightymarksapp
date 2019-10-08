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
		{
			resolve: `gatsby-plugin-canonical-urls`,
			options: {
				siteUrl: siteMetadata.siteUrl,
				stripQueryString: true,
			},
		},
		{
			resolve: 'gatsby-plugin-robots-txt',
			options: {
				policy: [{ userAgent: '*', allow: '/' }],
			},
		},
		{
			resolve: `gatsby-plugin-sitemap`,
			options: {
				exclude: ['/bookmarks'],
			},
		},
		{
			resolve: `gatsby-plugin-google-analytics`,
			options: {
				trackingId: 'UA-140924415-2',
				head: false,
				anonymize: true,
				respectDNT: true,
				pageTransitionDelay: 0,
			},
		},
		{
			resolve: 'gatsby-plugin-webpack-bundle-analyzer',
			options: {
				analyzerMode: 'static',
				defaultSizes: 'gzip',
				openAnalyzer: false,
				production: true,
				disable: process.env.NODE_ENV !== 'production',
			},
		},
		{
			resolve: `gatsby-plugin-manifest`,
			options: {
				name: siteMetadata.name,
				short_name: siteMetadata.name,
				start_url: `/`,
				background_color: colors.darkWhite,
				theme_color: colors.blue,
				display: `standalone`,
				icon: `src/images/blue-stroke-512.png`,
				cache_busting_mode: `name`,
			},
		},
		{
			resolve: 'gatsby-plugin-react-svg',
			options: {
				rule: {
					include: /src/,
				},
			},
		},
		{
			resolve: `gatsby-plugin-netlify`,
			options: {
				mergeCachingHeaders: true,
				headers: {
					'/icons/*': ['Cache-Control: public, max-age=31536000, immutable'],
				},
				allPageHeaders: [
					'Link: </static/roboto-mono-v7-latin-regular-0c94e034ca06357576c2d03d623e1fcd.woff2>; rel=preload; as=font',
				],
			},
		},
		'gatsby-plugin-react-helmet',
		'gatsby-plugin-typescript',
		'gatsby-plugin-preact',
		'gatsby-plugin-linaria',
	],
}
