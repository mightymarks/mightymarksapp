import { clean } from './clean'

export const getUIBarID = browser.bookmarks
	.get('toolbar_____')
	.then(() => 'toolbar_____')
	.catch(() => '1')

window.hasOwnProperty('browser') ? 'toolbar_____' : '1'

export const normaliseLocalBookmark = async (
	bookmark: browser.bookmarks.BookmarkTreeNode,
) => {
	const { title, url, id } = bookmark
	const bookmarkChildren: browser.bookmarks.BookmarkTreeNode[] = await browser.bookmarks.getChildren(
		id,
	)
	const children: NormalisedBookmark[] = await Promise.all(
		bookmarkChildren.map(normaliseLocalBookmark),
	)

	return clean({ title, url, children })
}

export const getUIBar = async () => {
	const UIBarID = await getUIBarID
	const UIBar = await browser.bookmarks.get(UIBarID)

	return UIBar[0]
}

export const getNormalisedUIBar = async () => {
	const UIBar = await getUIBar()

	const normalised = await normaliseLocalBookmark(UIBar)

	return normalised
}

export const isUIBar = async ({ id }: browser.bookmarks.BookmarkTreeNode) =>
	id === (await getUIBarID)
