import { styled } from 'linaria/react'
import { tablet } from '../mq'
import { colors, fonts, fontSizes, lineHeights, space } from '../theme'

const Signup = styled.a`
	color: ${colors.darkWhite};
	font-family: ${fonts.sans};
	font-size: ${fontSizes[2]};
	line-height: ${lineHeights.text};
	display: inline-block;
	background-color: ${colors.blue};
	padding: ${space[2]} ${space[3]};
	border-radius: 3px;
	-webkit-font-smoothing: antialiased;
	margin: 10vw 0 2vw;
	text-decoration: none;
	display: inline-flex;
	align-items: center;

	&:hover {
		background-color: ${colors.red};
	}

	${tablet} {
		margin-top: 6vw;
	}
`

export default Signup
