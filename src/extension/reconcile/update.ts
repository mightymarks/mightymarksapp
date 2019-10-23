import { debug } from '../debug'
import { isUIBar } from '../local'
import { create } from './create'
import { isFolder } from './is-folder'
import { remove } from './remove'

export const update = async ({
	local,
	remote,
	parentId,
	index,
}: BookmarkPair & BookmarkContext) => {
	if (await isUIBar(local)) return local

	if (isFolder(local) === isFolder(remote)) {
		debug(`same type`)
		if (local.title !== remote.title || local.url !== remote.url) {
			debug(`content differs, updating`, {
				local,
				remote,
			})
			return browser.bookmarks.update(local.id, {
				url: remote.url,
				title: remote.title,
			})
		} else {
			debug(`same content, doing nothing`)
			return local
		}
	}

	debug(`different types`)
	await remove({ local })

	debug(
		`creating "${remote.title}" (remote) after removing "${
			local.title
		}" (local)`,
	)

	return create({
		parentId,
		remote,
		index,
	})
}
