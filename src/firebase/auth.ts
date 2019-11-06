import 'firebase/auth'
import { useEffect, useState } from 'react'
import { firebase, getFirebase } from './app'

export const auth = getFirebase().auth()

const githubAuthProvider = new firebase.auth.GithubAuthProvider()

export const signOut = () => auth.signOut()

export const signIn = () => auth.signInWithPopup(githubAuthProvider)

export const removeUser = () => auth.currentUser.delete()

export const useAuthState: () => [
	User,
	boolean,
	firebase.auth.Error | undefined,
] = () => {
	const [user, setUser] = useState()
	const [error, setError] = useState()

	useEffect(() => auth.onAuthStateChanged(setUser, setError), [])

	return [user, typeof user === 'undefined', error]
}

export const getUser = () => auth.currentUser
