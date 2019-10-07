import React from 'react'
import 'typeface-roboto-mono'
import CSSReset from './CSSReset'
import SEO from './SEO'

const Layout = ({ children, ...props }) => (
	<CSSReset>
		<SEO />
		{children}
	</CSSReset>
)

export default Layout
