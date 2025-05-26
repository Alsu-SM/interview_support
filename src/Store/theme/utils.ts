import { themeDark, themeLight } from '../../theme';
import { LOCAL_STORAGE_KEY } from '../constants';
import { IStoreType } from '../types';
import { APP_THEME_SLICE_DEFAULT } from './constants';
import { IAppThemeSlice } from './types';

export const restoreLocalStorage = (): IAppThemeSlice => {
	const store: string | null = localStorage.getItem(LOCAL_STORAGE_KEY);
	if (!store) {
		return APP_THEME_SLICE_DEFAULT;
	}

	const storeParsed: IStoreType = JSON.parse(store);

	return {
		...storeParsed.appThemeSlice,
		theme: storeParsed.appThemeSlice.type === 'dark' ? themeDark : themeLight,
	};
};
