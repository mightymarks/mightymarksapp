require('ts-node').register({
	files: true,
	compilerOptions: {
		module: 'commonjs',
		target: 'es2017',
	},
})

require('dotenv').config()
const { colors } = require('./src/theme')
const { siteMetadata } = require('./src/config')

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
				icon: require.resolve('./src/components/images/blue-stroke-512.png'),
				cache_busting_mode: `name`,
			},
		},
		{
			resolve: 'gatsby-plugin-react-svg',
			options: {
				rule: {
					include: /\.svg$/,
				},
			},
		},
		{
			resolve: `gatsby-plugin-page-creator`,
			options: {
				path: `${__dirname}/src/website`,
			},
		},
		'gatsby-plugin-react-helmet',
		'gatsby-plugin-typescript',
		'gatsby-plugin-preact',
		'gatsby-plugin-linaria',
	],
}
