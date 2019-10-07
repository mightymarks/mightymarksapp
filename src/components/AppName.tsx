import { graphql, useStaticQuery } from 'gatsby'
import { styled } from 'linaria/react'
import React from 'react'

const SiteName = styled.span`
	p & {
		/* font-style: italic; */
		text-transform: uppercase;
		display: inline-block;
	}
`

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

	return <SiteName {...props}>{data.site.siteMetadata.name}</SiteName>
}
