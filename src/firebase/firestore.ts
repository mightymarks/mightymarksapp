import 'firebase/firestore'
import { getFirebase } from '.'

export const firestore = getFirebase().firestore()

export const TIMESTAMP_KEY = 'timestamp'
