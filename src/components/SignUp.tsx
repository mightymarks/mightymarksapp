import { css } from 'linaria'
import { styled } from 'linaria/react'
import React from 'react'
import { CSSTransition } from 'react-transition-group'
import { CSSTransitionProps } from 'react-transition-group/CSSTransition'
import { tablet } from '../mq'
import { colors, fonts, fontSizes } from '../theme'
import Button from './Button'
import { signIn, signOut, useAuthState } from './Firebase'
import GitHubIcon from './GitHubIcon'

const TRANSITION_DURATION = 200

const iconStyles = css`
	margin-left: 1ch;
`

const User = styled.div`
	margin: 10vw 0 2vw;
	font-family: ${fonts.sans};
	font-size: ${fontSizes[1]};
	position: relative;

	p {
		color: ${colors.grey[4]};
	}

	${tablet} {
		margin-top: 6vw;
	}
`

const transitionCSS = css`
	transition: opacity ${TRANSITION_DURATION}ms;
	position: absolute;

	&.enter {
		opacity: 0;
	}

	&.enter-active {
		opacity: 1;
	}

	&.exit {
		opacity: 1;
		transition: opacity 0ms;
	}

	&.exit-active {
		opacity: 0;
	}
`

const Error: React.FC<{ error: firebase.auth.Error }> = ({ error }) => (
	<p>Error: {error}</p>
)

const SignOut = styled.div`
	color: ${colors.black};

	em {
		font-style: normal;
		font-weight: 700;
	}

	p + p {
		margin-top: 1rem;
	}
`

const Transition: React.FC<Partial<CSSTransitionProps>> = props => (
	<CSSTransition
		className={transitionCSS}
		timeout={TRANSITION_DURATION}
		unmountOnExit
		{...props}
	/>
)

const SignUp: React.FC = () => {
	const [user, loading, error] = useAuthState()

	return (
		<User>
			{error && <Error error={error} />}
			<Transition in={!loading && !user}>
				<Button onClick={signIn} color={colors.blue} className={transitionCSS}>
					Join the waiting list with GitHub
					<GitHubIcon className={iconStyles} />
				</Button>
			</Transition>
			<Transition in={!loading && !!user}>
				<SignOut className={transitionCSS}>
					<p>
						You are signed up to the waiting list as{' '}
						<em>{user && user.email}</em>.
					</p>
					<br />
					<Button
						onClick={signOut}
						color={colors.grey[4]}
						hollow
						small
						focusColor={colors.blue}
					>
						Sign out
					</Button>
				</SignOut>
			</Transition>
		</User>
	)
}

export default SignUp
