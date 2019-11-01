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
	browser_action: {
		default_popup: 'popup.html',
	},
	content_security_policy:
		"script-src 'self' https://mightymarks.app https://apis.google.com https://www.googletagmanager.com; object-src 'self'",
}
