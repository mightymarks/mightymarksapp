import 'firebase/functions'
import { firebase } from './app'

export const FUNCTION_REGION = 'europe-west1'

const functions = firebase.app().functions(FUNCTION_REGION)

// functions.useFunctionsEmulator('http://localhost:5001')

export const pushBookmarks = functions.httpsCallable('pushBookmarks')
