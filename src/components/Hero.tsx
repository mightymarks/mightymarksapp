import { styled } from 'linaria/react'
import { mobileS, tablet } from '../mq'
import { colors, fonts, lineHeights } from '../theme'

const Hero = styled.h1`
	position: relative;
	color: ${colors.red};
	font-family: ${fonts.sans};
	font-size: 11vw;
	font-weight: bold;
	line-height: ${lineHeights.hero};
	word-break: break-word;
	hyphens: auto;
	padding-top: 9vw;
	text-shadow: ${colors.yellow} 2px 2px 0;

	${mobileS} {
		word-break: normal;
		hyphens: none;
	}

	${tablet} {
		font-size: 5.5vw;
		padding-top: 6vw;
	}
`

export default Hero
