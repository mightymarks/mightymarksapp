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
				openAnalyzer: false,
				production: true,
				disable: process.env.NODE_ENV !== 'production',
			},
		},
		'gatsby-plugin-react-helmet',
		'gatsby-plugin-typescript',
		'gatsby-plugin-preact',
	],
}
