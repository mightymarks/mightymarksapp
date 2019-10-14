import { styled } from 'linaria/react'
import React from 'react'
import AppName from '../components/AppName'
import ShootingStarSVG from '../images/shooting-star.svg'
import { mobileS, tablet } from '../mq'
import { colors, fonts, lineHeights } from '../theme'
import AvoidWrap from './util/AvoidWrap'

const ShootingStar = styled(ShootingStarSVG)`
	fill: ${colors.blue};
	width: 10vw;
	height: auto;
	position: absolute;
	right: 4vw;
	top: -1vw;

	${tablet} {
		top: 1vw;
		right: 0;
		width: 5vw;
	}
`

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

export default () => (
	<Hero>
		<ShootingStar />
		<AppName /> keeps your browser bookmarks <AvoidWrap>in sync</AvoidWrap>.
	</Hero>
)
