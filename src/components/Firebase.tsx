import firebase from 'firebase/app'
import 'firebase/auth'
import { useEffect, useState } from 'react'

const config = {
	apiKey: process.env.GATSBY_FIREBASE_API_KEY,
	authDomain: process.env.GATSBY_FIREBASE_AUTH_DOMAIN,
	databaseURL: process.env.GATSBY_FIREBASE_DATABASE_URL,
	projectId: process.env.GATSBY_FIREBASE_PROJECT_ID,
	storageBucket: process.env.GATSBY_FIREBASE_STORAGE_BUCKET,
	messagingSenderId: process.env.GATSBY_FIREBASE_MESSAGING_SENDER_ID,
	appId: process.env.GATSBY_FIREBASE_APP_ID,
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
