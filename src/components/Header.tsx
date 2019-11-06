import { styled } from 'linaria/react'
import { colors } from '../theme'
import { tablet } from '../theme/mq'

const Header = styled.header`
	background-color: ${colors.darkWhite};
	padding: 10vw;
	grid-column: 1 / 2;
	grid-row: 1 / 3;

	${tablet} {
		padding: 7vw;
	}
`

export default Header
