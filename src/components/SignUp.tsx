import { styled } from 'linaria/react'
import React from 'react'
import { CSSTransitionProps } from 'react-transition-group/CSSTransition'
import { tablet } from '../mq'
import { colors } from '../theme'
import { useAuthState } from './Firebase'

const User: React.FC<Partial<CSSTransitionProps>> = styled.div`
	margin: 10vw 0 2vw;

	${tablet} {
		margin-top: 6vw;
	}
`

const Error = styled.p`
	color: ${colors.red};
`

const SignUp: React.FC = () => {
	const [user, loading, error] = useAuthState()

	console.log({ user, loading, error })

	if (error)
		return (
			<User>
				<Error>{error}</Error>
			</User>
		)

	return (
		!loading && (
			<User>
				{user ? (
					<p>
						You are on the waiting list as <em>{user && user.email}</em>.
					</p>
				) : (
					<p>Join the waiting list</p>
				)}
			</User>
		)
	)
}

export default SignUp
