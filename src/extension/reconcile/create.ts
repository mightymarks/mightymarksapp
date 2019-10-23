import { debug } from '../debug'

export const create = ({
	parentId,
	remote,
	index,
}: {
	parentId: string
	remote: NormalisedBookmark
	index: number
}) => {
	debug(`creating local "${remote.title}" 🏠`)

	return browser.bookmarks.create({
		parentId,
		url: remote.url,
		title: remote.title,
		index,
	})
}
