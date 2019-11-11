import * as admin from 'firebase-admin'
import * as functions from 'firebase-functions'
const FUNCTION_REGION = 'europe-west1'

admin.initializeApp()

const db = admin.firestore()

// export const patchBookmarks = functions
// 	.region(FUNCTION_REGION)
// 	.firestore.document('users/{userID}/bookmarks-history/{bookmarkId}')
// 	.onCreate(async snapshot => {
// 		const bookmarks = snapshot.data()

// 		// this needs to get all relevant revisions from bookmarks-history
// 		// and apply the diffs

// 		if (bookmarks && bookmarks.uid) {
// 			try {
// 				return db
// 					.collection('users')
// 					.doc(bookmarks.uid)
// 					.set({ bookmarks }, { merge: true })
// 			} catch (e) {
// 				return e
// 			}
// 		}

// 		return 'snapshot.data() is null'
// 	})

export const pushBookmarks = functions
	.region(FUNCTION_REGION)
	.https.onCall(async (bookmarks, context) => {
		const user = context.auth

		if (!user) {
			throw new functions.https.HttpsError(
				'failed-precondition',
				'The function must be called while authenticated.',
			)
		} else {
			console.log('Writing to main bookmark file')

			return db
				.collection('users')
				.doc(user.uid)
				.set({ bookmarks }, { merge: true })
		}
	})
