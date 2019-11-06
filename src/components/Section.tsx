import { styled } from 'linaria/react'
import { space } from '../theme'
import { mobileS, tablet } from '../theme/mq'

const Section = styled.section`
	padding-bottom: ${space[1]};

	${mobileS} {
		padding-bottom: ${space[4]};
	}

	&:first-child {
		margin-top: 0;

		${tablet} {
			/* margin-top: ${space[4]}; */
		}
	}

	&:last-child {
		padding-bottom: 0;
	}
`

export default Section
