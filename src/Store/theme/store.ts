import { createSlice } from '@reduxjs/toolkit';
import {
	IAppThemeSlice,
	IAppThemeSliceName,
	IAppThemeSliceReducers,
	IAppThemeSliceSelectors,
} from './types';
import { APP_THEME_SLICE_NAME } from './constants';
import { changeGreetingsReducer, changeThemeReducer } from './reducers';
import {
	getAppThemeGreetingsSelector,
	getThemeSelector,
	getTypeSelector,
} from './selectors';
import { restoreLocalStorage } from './utils';

const appThemeSlice = createSlice<
	IAppThemeSlice,
	IAppThemeSliceReducers,
	IAppThemeSliceName,
	IAppThemeSliceSelectors
>({
	name: APP_THEME_SLICE_NAME,
	initialState: restoreLocalStorage(),
	reducers: {
		changeAppTheme: changeThemeReducer,
		changeGreetings: changeGreetingsReducer,
	},
	selectors: {
		getAppThemeType: getTypeSelector,
		getAppTheme: getThemeSelector,
		getAppThemeGreetings: getAppThemeGreetingsSelector,
	},
});

export const { changeAppTheme, changeGreetings } = appThemeSlice.actions;

export const { getAppThemeType, getAppTheme, getAppThemeGreetings } =
	appThemeSlice.selectors;

export default appThemeSlice.reducer;
