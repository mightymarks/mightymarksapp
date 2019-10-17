import firebase from 'firebase/app'
import 'firebase/auth'
import { useEffect, useState } from 'react'

const config = {
	apiKey: process.env.GATSBY_FIREBASE_API_KEY,
	authDomain: 'mightymarks.app',
	databaseURL: 'https://mighty-marks.firebaseio.com',
	projectId: 'mighty-marks',
	storageBucket: 'mighty-marks.appspot.com',
	messagingSenderId: '856402700504',
	appId: '1:856402700504:web:cae8ec27936c0142088fad',
	measurementId: 'G-PT9SZDFMST',
}

const getFirebase = () => {
	firebase.apps.length || firebase.initializeApp(config)
	return firebase
}

const githubAuthProvider = new firebase.auth.GithubAuthProvider()

export const useAuthState: () => [
	User,
	boolean,
	firebase.auth.Error | undefined,
] = () => {
	const [user, setUser] = useState()
	const [error, setError] = useState()

	useEffect(
		() =>
			getFirebase()
				.auth()
				.onAuthStateChanged(setUser, setError),
		[],
	)

	return [user, typeof user === 'undefined', error]
}

export const signOut = () =>
	getFirebase()
		.auth()
		.signOut()

export const signIn = () =>
	getFirebase()
		.auth()
		.signInWithPopup(githubAuthProvider)

export const removeUser = () =>
	getFirebase()
		.auth()
		.currentUser.delete()
