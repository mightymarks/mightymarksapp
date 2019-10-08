import React from 'react'
import '../fonts.css'
import '../reset.css'
import SEO from './SEO'

const Layout: React.FC = ({ children, ...props }) => (
	<>
		<SEO />
		{children}
	</>
)

export default Layout
