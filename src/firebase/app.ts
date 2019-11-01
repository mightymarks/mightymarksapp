import 'firebase/analytics'
import firebase from 'firebase/app'
import 'firebase/performance'
import 'first-input-delay'

const config = {
	apiKey: 'AIzaSyAXZXdj-eJcuRtS9_qTxI3eIzUUV5023Lc',
	authDomain: 'mightymarks.app',
	databaseURL: 'https://mighty-marks.firebaseio.com',
	projectId: 'mighty-marks',
	storageBucket: 'mighty-marks.appspot.com',
	messagingSenderId: '856402700504',
	appId: '1:856402700504:web:cae8ec27936c0142088fad',
	measurementId: 'G-PT9SZDFMST',
}

if (!firebase.apps.length) firebase.initializeApp(config)

export const perf = firebase.performance()
export const analytics = firebase.analytics()

export { firebase }
