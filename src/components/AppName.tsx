import { graphql, useStaticQuery } from 'gatsby'
import React from 'react'
import { Box } from 'reflexbox'

export default props => {
	const data = useStaticQuery(graphql`
		query AppName {
			site {
				siteMetadata {
					name
				}
			}
		}
	`)

	return (
		<Box
			as="span"
			sx={{ 'p &': { fontStyle: 'italic' } }}
			display="inline-block"
			{...props}
		>
			{data.site.siteMetadata.name}
		</Box>
	)
}
