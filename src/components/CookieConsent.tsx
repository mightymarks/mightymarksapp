import { styled } from 'linaria/react'
import { transparentize } from 'polished'
import React, { useEffect, useState } from 'react'
import { colors, fonts, fontSizes, space } from '../theme'

const ConsentWrapper = styled.div`
	position: fixed;
	bottom: 0;
	z-index: 9999999;
	width: 100%;
	background-color: ${transparentize(0.03, colors.blue)};
	padding: 2rem;

	h4 {
		font-family: ${fonts.sans};
		font-size: ${fontSizes[1]};
		font-weight: 600;
		color: ${colors.darkWhite};
	}

	p {
		font-family: ${fonts.sans};
		font-size: ${fontSizes[1]};
		color: ${colors.darkWhite};
		/* padding-top: ${space[3]}; */
		-webkit-font-smoothing: antialiased;
	}

	a {
		color: currentColor;

		&:hover {
			color: ${colors.red};
		}
	}
`

const CloseButton = styled.button`
	font-size: 0;
	appearance: none;
	background-color: transparent;
	border: none;
	height: 3rem;
	width: 3rem;
	position: absolute;
	top: 0;
	right: 0;
	display: flex;
	align-items: center;
	justify-content: center;
	cursor: pointer;
	color: ${colors.white};

	&:hover {
		color: ${colors.yellow};
	}

	&:after {
		content: '×';
		font-size: 1.5rem;
		line-height: 0;
	}
`

const COOKIE_NAME = 'cookie-consent'

const CookieConsent = () => {
	const [requestConsent, setRequestConsent] = useState(true)
	const [userConsented, setUserConsented] = useState(false)

	const setCookie = () => {
		document.cookie = `${COOKIE_NAME}=true; max-age=${60 * 60 * 24 * 365}`
		setUserConsented(true)
	}

	useEffect(
		() =>
			setRequestConsent(
				Boolean(
					document.cookie
						.split(';')
						.filter(item => item.includes(`${COOKIE_NAME}=true`)).length,
				),
			),
		[userConsented],
	)

	return requestConsent ? null : (
		<ConsentWrapper>
			<h4>Let’s get this out of the way…</h4>
			<p>
				By using this site, you acknowledge that you have read and understand
				our{' '}
				<a href="https://www.iubenda.com/privacy-policy/98977183/cookie-policy">
					cookie policy
				</a>{' '}
				and{' '}
				<a href="https://www.iubenda.com/privacy-policy/98977183/legal">
					privacy policy
				</a>
				.
			</p>
			<CloseButton tabIndex={0} onClick={setCookie}>
				Accept cookies
			</CloseButton>
		</ConsentWrapper>
	)
}

export default CookieConsent
