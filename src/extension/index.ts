import { isUndefined } from 'lodash-es'
import { debug } from './debug'
import { remoteBookmarks, uploadBookmarksToFirestore } from './firebase'
import { listen, stopListening } from './listeners'
import { getUIBar } from './local'
import reconcile from './reconcile'

listen()

remoteBookmarks.onSnapshot(async snapshot => {
	console.log('%cupdate received ←', 'color: deeppink')
	const start = performance.now()
	stopListening()

	if (snapshot.exists) {
		const remoteBookmarks = snapshot.data()

		if (remoteBookmarks) {
			if (!Object.getOwnPropertyNames(remoteBookmarks).length) {
				debug('remote bookmarks are empty')

				if (window.confirm('Do you want to upload your bookmarks?')) {
					await uploadBookmarksToFirestore()
				}
			} else {
				debug('snapshot has bookmarks')
				const localUIBar = await getUIBar()

				if (
					!isUndefined(localUIBar.index) &&
					!isUndefined(localUIBar.parentId)
				) {
					console.groupCollapsed(`reconciling`)

					await reconcile({
						remote: remoteBookmarks.UIBar,
						local: localUIBar,
						index: localUIBar.index,
						parentId: localUIBar.parentId,
					})

					console.groupEnd()
				}
			}
		} else {
			console.error('no data in snapshot', snapshot)
		}
	}

	listen()
	const stop = performance.now()
	console.log(`done in %c${Math.round(stop - start)}ms`, 'color: deeppink')
})
