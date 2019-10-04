import React from 'react'
import { Box } from 'reflexbox'
import { useThemeUI } from 'theme-ui'

export default props => {
	const { theme } = useThemeUI()

	return (
		<Box
			as="h2"
			color="blue"
			fontFamily="mono"
			fontSize={[1]}
			fontWeight="normal"
			lineHeight="heading"
			display="inline-block"
			backgroundColor="yellow"
			padding={1}
			sx={{ textShadow: `${theme.colors.white} 2px 2px 0px` }}
			{...props}
		/>
	)
}
