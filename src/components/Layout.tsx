import React from 'react'
import '../theme/fonts.css'
import '../theme/reset.css'
import CookieConsent from './CookieConsent'
import SEO from './SEO'

const Layout: React.FC = ({ children }) => (
	<>
		<SEO />
		<CookieConsent />
		{children}
	</>
)

export default Layout
