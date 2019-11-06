import { styled } from 'linaria/react'
import { colors } from '../theme'
import { tablet } from '../theme/mq'

const Main = styled.main`
	background-color: ${colors.black};
	padding: 10vw;
	-webkit-font-smoothing: antialiased;

	${tablet} {
		padding: calc(1.5rem + 13vw) 7vw 5vw;
	}
`

export default Main
