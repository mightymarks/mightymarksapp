import { graphql, useStaticQuery } from 'gatsby'
import { styled } from 'linaria/react'
import React from 'react'

const FormattedSiteName = styled.span`
	p & {
		/* font-style: italic; */
		display: inline-block;
	}
`

const SiteName: React.FC = props => {
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
		<FormattedSiteName {...props}>
			{data.site.siteMetadata.name}
		</FormattedSiteName>
	)
}

export default SiteName
