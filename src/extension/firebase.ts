import firebase from 'firebase/app'
import 'firebase/firestore'
import { getNormalisedUIBar } from './local'

// Your web app's Firebase configuration
const firebaseConfig = {
	apiKey: 'AIzaSyDTVTGK_btrv2xGexYK1v-Uq3FiGo5b9Js',
	authDomain: 'monomarkapp.firebaseapp.com',
	databaseURL: 'https://monomarkapp.firebaseio.com',
	projectId: 'monomarkapp',
	storageBucket: 'monomarkapp.appspot.com',
	messagingSenderId: '99731700934',
	appId: '1:99731700934:web:e82313923f30e9e6',
}

// Initialize Firebase
firebase.initializeApp(firebaseConfig)

export const firestore = firebase.firestore()

export const uploadBookmarksToFirestore = async () => {
	console.log('%cpushing update →', 'color: deeppink')

	const UIBar = await getNormalisedUIBar()

	return firestore
		.collection('bookmarks')
		.doc('KrBUCCqHZAWfsGjw1cGgRNLKYtl1')
		.set({ UIBar })
}

export const remoteBookmarks = firestore.doc(
	'bookmarks/KrBUCCqHZAWfsGjw1cGgRNLKYtl1',
)
