import { css } from 'linaria'
import { styled } from 'linaria/react'
import React from 'react'
import Anime from 'react-anime'
import { tablet } from '../mq'
import { colors, fonts, fontSizes } from '../theme'
import Button from './Button'
import { signIn, signOut, useAuthState } from './Firebase'
import GitHubIcon from './GitHubIcon'

const iconStyles = css`
	margin-left: 1ch;
`

const SignUpContainer = styled.div`
	margin: 10vw 0 2vw;
	font-family: ${fonts.sans};
	color: ${colors.black};
	font-size: ${fontSizes[1]};

	${tablet} {
		margin-top: 6vw;
	}
`

const SignedOut = () => (
	<Anime opacity={[0, 1]} duration={500} easing="easeOutSine">
		<Button onClick={signIn}>
			Join the waiting list with GitHub
			<GitHubIcon className={iconStyles} />
		</Button>
	</Anime>
)

const Error: React.FC<{ error: firebase.auth.Error }> = ({ error }) => (
	<p>Error: {error}</p>
)

const SignedIn = styled.div`
	color: ${colors.black};

	em {
		font-style: normal;
		font-weight: 600;
	}

	p + p {
		margin-top: 1rem;
	}
`

const SignUp: React.FC = () => {
	const [user, loading, error] = useAuthState()

	return (
		<SignUpContainer>
			{loading ? null : error ? (
				<Error error={error} />
			) : user ? (
				<Anime opacity={[0, 1]} duration={500} easing="easeOutSine">
					<SignedIn>
						<p>
							You are signed up to the waiting list as <em>{user.email}</em>{' '}
							– thanks!
						</p>
						<p>We'll be in touch very soon.</p>
						<Button onClick={signOut}>sign out</Button>
					</SignedIn>
				</Anime>
			) : (
				<SignedOut />
			)}
		</SignUpContainer>
	)
}

export default SignUp
