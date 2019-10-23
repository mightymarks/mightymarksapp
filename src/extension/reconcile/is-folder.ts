import { isUndefined } from 'lodash-es'

export const isFolder = ({
	url,
}: browser.bookmarks.BookmarkTreeNode | NormalisedBookmark) => isUndefined(url)
