const pkg = require('read-pkg-up').sync().packageJson
const { siteMetadata } = require('../../gatsby-config')

module.exports = {
	manifest_version: 2,
	name: siteMetadata.name,
	version: pkg.version,

	description: siteMetadata.description,

	permissions: ['bookmarks'],
	background: {
		scripts: ['browser-polyfill.js', 'background.js'],
	},
	content_security_policy:
		"script-src 'self' https://monomark.firebaseio.com; object-src 'self'",
}
