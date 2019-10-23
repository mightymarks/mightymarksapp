import { zip } from 'lodash-es'
import { create } from './create'
import { remove } from './remove'
import { update } from './update'

interface Args {
	remote?: NormalisedBookmark
	local?: browser.bookmarks.BookmarkTreeNode
	parentId: string
	index: number
}

export const reconcileBookmark: ({
	remote,
	local,
	parentId,
	index,
}: Args) => Promise<any> = async ({ remote, local, parentId, index }) => {
	console.groupCollapsed(
		`"${local.title || 'unkown'}" (local) and "${remote.title ||
			'unkown'}" (remote)`,
	)

	if (local && !remote) {
		console.groupEnd()
		return remove({ local })
	}

	if (remote) {
		const newLocal = local
			? await update({ local, remote, parentId, index })
			: await create({
					parentId,
					remote,
					index,
			  })

		const children = zip(
			remote.children || [],
			newLocal ? await browser.bookmarks.getChildren(newLocal.id) : [],
		)

		// we need to reconcile children async, otherwise indexes
		// can get out of order
		for (let index = 0; index < children.length; index++) {
			const [remoteChild, localChild] = children[index]
			await reconcileBookmark({
				remote: remoteChild,
				local: localChild,
				parentId: newLocal.id,
				index,
			})
		}

		console.groupEnd()
		return newLocal
	}

	console.groupEnd()
	return Promise.reject('remote and local are undefined')
}

export default reconcileBookmark
