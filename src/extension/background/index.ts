import { getAuth } from '../../firebase/auth'
import { TIMESTAMP_KEY } from '../../firebase/firestore'
import { pushBookmarks } from '../../firebase/functions'
import { highlightAuthStateToUser } from './badge'
import { getLocalBookmarks } from './localBookmarks'

getAuth().onAuthStateChanged(async user => {
	highlightAuthStateToUser(user)
	if (user) {
		const localBookmarks = await getLocalBookmarks()
		pushBookmarks({
			[TIMESTAMP_KEY]: Date.now(),
			...localBookmarks,
		}).then(console.log)

		// remoteBookmarks().onSnapshot(querySnapshot => {
		// 	console.log(querySnapshot.docs[0].data())
		// }, console.error)
	}

	// pushBookmarks(localBookmarks)
}, console.error)

// const bookmarksHistoryRef = () =>
// 	firestore
// 		.collection('users')
// 		.doc(getAuth().currentUser.uid)
// 		.collection('bookmarks-history')

// const remoteBookmarks = () => {
// 	console.log('%c← fetching bookmarks', 'color: deeppink')

// 	return bookmarksHistoryRef()
// 		.orderBy(TIMESTAMP_KEY)
// 		.limit(1)
// }

// const pushBookmarks = async () => {
// 	console.log('%cpushing update →', 'color: deeppink')

// 	const localBookmarks = await getLocalBookmarks()

// 	return bookmarksHistoryRef().add({
// 		[TIMESTAMP_KEY]: Date.now(),
// 		...localBookmarks,
// 		// very annoying workaround for https://github.com/firebase/firebase-functions/issues/300
// 		uid: getAuth().currentUser.uid,
// 	})
// }
