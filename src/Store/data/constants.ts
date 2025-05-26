import { IDataSlice, IDataSliceName } from './types';

export const DATA_SLICE_DEFAULT: IDataSlice = {
	themes: [],
	questions: [],
	ui: {
		isCreateQuestionActive: false,
		isCreateThemeActive: false,
		isEditQuestionActive: false,
		isEditThemeActive: false,
		isFocusMode: false,
		isSearchActive: false,
		searchTags: [],
		searchText: '',
	},
};

export const DATA_SLICE_NAME: IDataSliceName = 'dataSlice';
