import { styled } from 'linaria/react'
import { colors, fonts, fontSizes, lineHeights, space } from '../theme'
import { tablet } from '../theme/mq'

const Callout = styled.h2`
	color: ${colors.blue};
	font-family: ${fonts.mono};
	font-size: ${fontSizes[1]};
	text-transform: uppercase;
	letter-spacing: 0.03em;
	font-weight: normal;
	line-height: ${lineHeights.heading};
	display: inline-block;
	background-color: ${colors.yellow};
	padding: ${space[1]} ${space[2]};

	-webkit-font-smoothing: antialiased;

	${tablet} {
		font-size: ${fontSizes[0]};
	}
`

export default Callout
