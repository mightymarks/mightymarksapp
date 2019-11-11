import 'firebase/firestore'
import { getFirebase } from './app'

export const firestore = getFirebase().firestore()

export const TIMESTAMP_KEY = 'timestamp'
