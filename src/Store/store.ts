import { configureStore } from '@reduxjs/toolkit';
import { DATA_SLICE_NAME, dataReducer } from './data';
import { APP_THEME_SLICE_NAME, appThemeReducer } from './theme';

const reducer = {
	[DATA_SLICE_NAME]: dataReducer,
	[APP_THEME_SLICE_NAME]: appThemeReducer,
};

const store = configureStore({
	reducer,
});

export default store;
