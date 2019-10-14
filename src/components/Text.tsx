import { styled } from 'linaria/react'
import { tablet } from '../mq'
import { colors, fonts, fontSizes, lineHeights, space } from '../theme'

const Text = styled.p`
	color: ${colors.darkWhite};
	font-family: ${fonts.sans};
	font-size: ${fontSizes[2]};
	font-weight: 400;
	line-height: ${lineHeights.text};
	max-width: 50ch;

	& + & {
		margin-top: ${space[3]};
	}

	${tablet} {
		font-size: ${fontSizes[1]};
		/* font-weight: 200; */
	}

	em {
		font-style: normal;
		font-weight: 600;
	}
`

export default Text
