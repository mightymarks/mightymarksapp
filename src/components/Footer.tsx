import { styled } from 'linaria/react'
import React from 'react'
import { tablet } from '../mq'
import { colors, fonts } from '../theme'

const StyledFooter = styled.footer`
	color: ${colors.red};
	font-family: ${fonts.sans};
	font-size: 0.625rem;
	background-color: ${colors.black};
	padding: 0 10vw 10vw;
	-webkit-font-smoothing: antialiased;
	display: flex;
	justify-content: flex-end;
	flex-direction: column;

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
		<p>
			Copyright © {new Date().getFullYear()}{' '}
			<Link href="https://deeppink.co">Deep Pink Ltd.</Link> All rights
			reserved.
		</p>
		<p>
			Say hello at{' '}
			<Link href="https://twitter.com/mightymarksapp">@mightymarksapp</Link> or{' '}
			<Link href="mailto:hello@mightymarks.app">hello@mightymarks.app</Link>.
		</p>
		<p>
			Read our{' '}
			<Link href="https://www.iubenda.com/privacy-policy/98977183">
				Privacy Policy
			</Link>{' '}
			or{' '}
			<Link href="https://www.iubenda.com/privacy-policy/98977183/cookie-policy">
				Cookie Policy
			</Link>
			.
		</p>
	</StyledFooter>
)

export default Footer
