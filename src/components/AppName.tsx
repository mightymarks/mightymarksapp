import { styled } from 'linaria/react'
import React from 'react'
import { name } from '../config'

const FormattedSiteName = styled.span`
	p & {
		/* font-style: italic; */
		display: inline-block;
	}
`

const SiteName: React.FC = props => {
	return <FormattedSiteName {...props}>{name}</FormattedSiteName>
}

export default SiteName
