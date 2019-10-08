export const onPreRenderHTML = ({
	getHeadComponents,
	replaceHeadComponents,
}) => {
	const headComponents = getHeadComponents()

	headComponents.sort((x, y) => {
		if (x.key === 'linaria-critical-css') {
			return 1
		} else if (y.key === 'linaria-critical-css') {
			return -1
		}
		return 0
	})

	replaceHeadComponents(headComponents)
}
