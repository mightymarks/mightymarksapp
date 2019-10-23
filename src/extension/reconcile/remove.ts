import { debug } from '../debug'
import { isUIBar } from '../local'
import { isFolder } from './is-folder'

export const remove = async ({
	local,
}: {
	local: browser.bookmarks.BookmarkTreeNode
}) => {
	if (await isUIBar(local)) return

	debug(`removing "${local.title}" 🏠`)

	return isFolder(local)
		? browser.bookmarks.removeTree(local.id)
		: browser.bookmarks.remove(local.id)
}
