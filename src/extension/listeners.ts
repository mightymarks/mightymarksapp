import { debounce } from 'lodash-es'
import { uploadBookmarksToFirestore } from './firebase'

const events = [
	browser.bookmarks.onChanged,
	browser.bookmarks.onCreated,
	browser.bookmarks.onMoved,
	browser.bookmarks.onRemoved,
]

const debounced = debounce(uploadBookmarksToFirestore, 300)

export const listen = () => {
	events.forEach(event => event.addListener(debounced))
	console.log('%clistening', 'color: #697486')
}

export const stopListening = () => {
	events.forEach(event => event.removeListener(debounced))
	console.log('%cstop listening', 'color: #697486')
}
