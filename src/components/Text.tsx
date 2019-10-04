import React from 'react'
import { Box } from 'reflexbox'

export default props => (
	<Box
		as="p"
		color="black"
		fontFamily="serif"
		fontSize={[2]}
		marginBottom={3}
		fontWeight="normal"
		lineHeight="text"
		maxWidth="50ch"
		{...props}
	/>
)
