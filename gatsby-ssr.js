export const onPreRenderHTML = ({
	getHeadComponents,
	replaceHeadComponents,
}) => {
	const headComponents = getHeadComponents()

	const sortedHeadComponents = sortBy(headComponents, [
		c => c.key === 'linaria-critical-css',
	])

	replaceHeadComponents(sortedHeadComponents)
}
