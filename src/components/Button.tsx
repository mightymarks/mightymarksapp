import { styled } from 'linaria/react'
import { colors, fonts, fontSizes, lineHeights, space } from '../theme'

interface Button extends React.ButtonHTMLAttributes<HTMLButtonElement> {
	color?: string
	focusColor?: string
	textColor?: string
	hollow?: boolean
	small?: boolean
}

const Button = styled.button<Button>`
	font-family: ${fonts.sans};
	line-height: ${lineHeights.text};
	display: inline-block;
	border-radius: 3px;
	border-width: 1px;
	border-style: solid;
	-webkit-font-smoothing: antialiased;
	text-decoration: none;
	display: inline-flex;
	align-items: center;
	cursor: pointer;

	border-color: ${props => props.color};
	color: ${props => (props.hollow ? props.color : props.textColor)};
	background-color: ${props => (props.hollow ? 'transparent' : props.color)};

	padding: ${props =>
		props.small ? `${space[1]} ${space[2]}` : `${space[2]} ${space[3]}`};
	font-size: ${props => (props.small ? fontSizes[0] : fontSizes[2])};

	&:hover {
		background-color: ${props =>
			props.hollow ? 'transparent' : props.focusColor};
		color: ${props => (props.hollow ? props.focusColor : props.textColor)};
		border-color: ${props => props.focusColor};
	}

	&:focus {
		outline: none;
		box-shadow: 0 0 0 2px ${props => props.focusColor};
	}

	&:active {
		background-color: ${colors.red};
		border-color: ${colors.red};
		color: ${colors.darkWhite};
	}
`

Button.defaultProps = {
	color: colors.black,
	focusColor: colors.red,
	textColor: colors.darkWhite,
	hollow: false,
	small: false,
}

export default Button
