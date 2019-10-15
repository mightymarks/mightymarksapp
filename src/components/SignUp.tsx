import { styled } from 'linaria/react'
import React from 'react'
import { CSSTransitionProps } from 'react-transition-group/CSSTransition'
import { colors } from '../theme'
import { useAuthState } from './Firebase'

const User: React.FC<Partial<CSSTransitionProps>> = styled.div``

const Error = styled.p`
	color: ${colors.red};
`

const SignUp: React.FC = () => {
	const [user, loading, error] = useAuthState()

	if (loading) return null

	if (error)
		return (
			<User>
				<Error>{error}</Error>
			</User>
		)

	return (
		<div>
			does this even render?
			{user ? (
				<p>
					You are on the waiting list as <em>{user && user.email}</em>.
				</p>
			) : (
				<p>Join the waiting list</p>
			)}
		</div>
	)
}

export default SignUp
