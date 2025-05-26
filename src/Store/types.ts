import { DATA_SLICE_NAME, IDataSlice } from './data';
import { APP_THEME_SLICE_NAME, IAppThemeSlice } from './theme';

export type IStoreType = {
	[DATA_SLICE_NAME]: IDataSlice;
	[APP_THEME_SLICE_NAME]: IAppThemeSlice;
};
