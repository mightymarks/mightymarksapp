import { styled } from 'linaria/react'
import { tablet } from '../mq'
import { colors } from '../theme'

const Main = styled.main`
	background-color: ${colors.black};
	padding: 10vw;
	-webkit-font-smoothing: antialiased;

	${tablet} {
		padding: calc(1.5rem + 13vw) 7vw 5vw;
	}
`

export default Main
