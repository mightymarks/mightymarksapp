import 'firebase/auth'
import { useEffect, useState } from 'react'
import { firebase, getFirebase } from './app'

const githubAuthProvider = new firebase.auth.GithubAuthProvider()

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

export const getUser = () => getFirebase().auth().currentUser

export const getAuth = () => getFirebase().auth()
