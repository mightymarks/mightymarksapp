import { styled } from 'linaria/react'
import React from 'react'
import { tablet } from '../mq'
import { colors, fonts } from '../theme'
import AvoidWrap from './util/AvoidWrap'

const StyledFooter = styled.footer`
	color: ${colors.red};
	font-family: ${fonts.sans};
	font-size: 0.625rem;
	background-color: ${colors.black};
	padding: 0 10vw 10vw;
	-webkit-font-smoothing: antialiased;

	${tablet} {
		padding: 0 7vw 6vw;
		grid-column: 2 / 2;
	}
`

const Link = styled.a`
	text-decoration: none;
	color: currentColor;

	&:hover,
	&:focus {
		color: ${colors.yellow};
	}
`

const Footer: React.FC = props => (
	<StyledFooter {...props}>
		<AvoidWrap>
			Copyright © {new Date().getFullYear()}{' '}
			<Link href="https://deeppink.co">Deep Pink Ltd.</Link>
		</AvoidWrap>{' '}
		<AvoidWrap>All rights reserved.</AvoidWrap> <br />
		<AvoidWrap>
			Say hello at{' '}
			<Link href="https://twitter.com/mightymarksapp">@mightymarksapp</Link>.
		</AvoidWrap>{' '}
		<AvoidWrap>
			{' '}
			Read our{' '}
			<Link href="https://www.iubenda.com/privacy-policy/98977183">
				Privacy Policy
			</Link>
			.
		</AvoidWrap>
	</StyledFooter>
)

export default Footer
