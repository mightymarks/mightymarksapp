import { styled } from 'linaria/react'
import ShootingStarSVG from '../images/shooting-star.svg'
import { tablet } from '../mq'
import { colors } from '../theme'

const ShootingStar = styled(ShootingStarSVG)`
	fill: ${colors.blue};
	width: 10vw;
	height: auto;
	position: absolute;
	right: 4vw;
	top: -1vw;

	${tablet} {
		top: 1vw;
		right: 0;
		width: 5vw;
	}
`

export default ShootingStar
