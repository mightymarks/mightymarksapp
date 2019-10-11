import React from 'react'
import '../fonts.css'
import '../reset.css'
import CookieConsent from './CookieConsent'
import SEO from './SEO'

const Layout: React.FC = ({ children, ...props }) => (
	<>
		<SEO />
		<CookieConsent />
		{children}
	</>
)

export default Layout
