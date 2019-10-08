import React from 'react'
import { Helmet } from 'react-helmet'
import '../fonts.css'
import '../reset.css'
import SEO from './SEO'

const Layout = ({ children, ...props }) => (
	<>
		<Helmet>
			<link
				rel="preload"
				href="/static/roboto-mono-v7-latin-regular-0c94e034ca06357576c2d03d623e1fcd.woff2"
				as="font"
			/>
		</Helmet>
		<SEO />
		{children}
	</>
)

export default Layout
