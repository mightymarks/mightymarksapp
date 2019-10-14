import { styled } from 'linaria/react'
import { tablet } from '../mq'
import { colors, fonts, fontSizes, lineHeights } from '../theme'

const Heading = styled.h3`
	font-family: ${fonts.mono};
	font-weight: normal;
	color: ${colors.red};
	font-size: ${fontSizes[1]};
	text-transform: uppercase;
	letter-spacing: 0.02em;
	display: inline-block;
	line-height: ${lineHeights.text};

	${tablet} {
		font-size: ${fontSizes[0]};
	}
`

export default Heading
