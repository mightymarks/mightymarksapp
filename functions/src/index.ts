import * as admin from 'firebase-admin'
import * as functions from 'firebase-functions'

admin.initializeApp()

const db = admin.firestore()

export const patchBookmarks = functions
	.region('europe-west2')
	.firestore.document('users/{userID}/bookmarks-history/{bookmarkId}')
	.onCreate(snapshot => {
		const bookmarks = snapshot.data()

		// this needs to get all relevant revisions from bookmarks-history
		// and apply the diffs

		return bookmarks
			? bookmarks.uid
				? db
						.collection('users')
						.doc(bookmarks.uid)
						.set({ bookmarks }, { merge: true })
				: Promise.reject('no uid')
			: Promise.reject('no bookmarks')
	})
