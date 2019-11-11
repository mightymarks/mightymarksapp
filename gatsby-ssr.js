export const onPreRenderHTML = ({
	getHeadComponents,
	replaceHeadComponents,
}) => {
	const headComponents = getHeadComponents()

	// make sure linaria CSS is the end of the <head />
	headComponents.sort((a, b) => {
		if (a.key === 'linaria-critical-css') {
			return 1
		} else if (b.key === 'linaria-critical-css') {
			return -1
		}
		return 0
	})

	replaceHeadComponents(headComponents)
}
