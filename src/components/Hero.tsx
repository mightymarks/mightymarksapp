import React from 'react'
import { Box } from 'reflexbox'
import { useThemeUI } from 'theme-ui'

export default props => {
	const { theme } = useThemeUI()

	return (
		<Box
			as="h1"
			color="red"
			fontFamily="sans"
			fontSize={{
				_: '10vw',
				mobileS: '11vw',
				tablet: '5.5vw',
			}}
			letterSpacing="-0.01em"
			fontWeight="bold"
			lineHeight="hero"
			sx={{
				textShadow: `${theme.colors.yellow} 4px 4px 0px`,
				wordBreak: ['break-word', 'normal'],
				hyphens: ['auto', 'none'],
			}}
			{...props}
		/>
	)
}
