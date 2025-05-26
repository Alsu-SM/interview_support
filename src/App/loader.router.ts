import { store } from '../Store';
import { LOCAL_STORAGE_KEY } from '../Store/constants';

export default function loader() {
	localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(store.getState()));

	store.subscribe(() => {
		localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(store.getState()));
	});

	return null;
}
