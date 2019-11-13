import * as admin from 'firebase-admin'
import * as functions from 'firebase-functions'

const FUNCTION_REGION = 'europe-west1'
// const TIMESTAMP_KEY = 'timestamp'

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
			return db
				.runTransaction(async transaction => {
					const userDoc = db
						.collection('users')
						.doc(user.uid)
						.get()

					console.log(userDoc)

					// const [revisions] = await Promise.all([
					// 	db
					// 		.collection('users')
					// 		.doc(user.uid)
					// 		.collection('bookmark-revisions')
					// 		.where(TIMESTAMP_KEY, '>', bookmarks[TIMESTAMP_KEY])
					// 		.orderBy(TIMESTAMP_KEY),
					// ])
					return
				})
				.then(function() {
					console.log('Transaction successfully committed!')
				})
				.catch(function(error) {
					console.log('Transaction failed: ', error)
				})

			// const revisions =

			// return db
			// 	.collection('users')
			// 	.doc(user.uid)
			// 	.collection('bookmark-revisions')
			// 	.add({ bookmarks })
			// // .set({ bookmarks }, { merge: true })
		}
	})
