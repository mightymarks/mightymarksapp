import 'firebase/functions'
import { getFirebase } from '.'

export const FUNCTION_REGION = 'europe-west1'

const functions = getFirebase()
	.app()
	.functions(FUNCTION_REGION)

functions.useFunctionsEmulator('http://localhost:5001')

export const pushBookmarks = functions.httpsCallable('pushBookmarks')
