import React from 'react'
import { Box } from 'reflexbox'

export default props => (
	<Box
		as="h3"
		color="red"
		fontFamily="mono"
		fontSize={[0]}
		letterSpacing="0.04em"
		fontWeight="bold"
		paddingBottom={1}
		lineHeight="heading"
		sx={{ textTransform: 'uppercase' }}
		{...props}
	/>
)
