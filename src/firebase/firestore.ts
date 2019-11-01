import 'firebase/firestore'
import { firebase } from './app'

export const firestore = firebase.firestore()

export const TIMESTAMP_KEY = 'timestamp'

// export const onRemoteBookmarksChanged = (user: User, fn) => {
// 	console.log('%registering snapshot listener', 'color: deeppink')

// 	const snapshot = remoteBookmarks(user)

// 	snapshot.onSnapshot(async snapshot => {
// 		if (snapshot.exists) {
// 			const remoteBookmarks = snapshot.data()

// 			if (remoteBookmarks) {
// 				if (!Object.getOwnPropertyNames(remoteBookmarks).length) {
// 					debug('remote bookmarks are empty')

// 					if (window.confirm('Do you want to upload your bookmarks?')) {
// 						await uploadBookmarksToFirestore()
// 					}
// 				} else {
// 					debug('snapshot has bookmarks')
// 					const localUIBar = await getUIBar()

// 					if (
// 						!isUndefined(localUIBar.index) &&
// 						!isUndefined(localUIBar.parentId)
// 					) {
// 						console.groupCollapsed(`reconciling`)

// 						await reconcile({
// 							remote: remoteBookmarks.UIBar,
// 							local: localUIBar,
// 							index: localUIBar.index,
// 							parentId: localUIBar.parentId,
// 						})

// 						console.groupEnd()
// 					}
// 				}
// 			} else {
// 				console.error('no data in snapshot', snapshot)
// 			}
// 		}
// 	})
// }
