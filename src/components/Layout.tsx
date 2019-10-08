import React from 'react'
import { Helmet } from 'react-helmet'
import '../fonts.css'
import woff2 from '../fonts/roboto-mono-v7-latin-regular.woff2'
import '../reset.css'
import SEO from './SEO'

const Layout = ({ children, ...props }) => (
	<>
		<Helmet>
			<link rel="preload" href={woff2} as="font" />
		</Helmet>
		<SEO />
		{children}
	</>
)

export default Layout
