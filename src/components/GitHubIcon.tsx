import { styled } from 'linaria/react'
import GitHubSVG from '../images/GitHub.svg'
import { colors, space } from '../theme'

const GitHubIcon = styled(GitHubSVG)`
	margin-left: ${space[2]};
	fill: ${colors.darkWhite};
	height: 24px;
`
export default GitHubIcon
