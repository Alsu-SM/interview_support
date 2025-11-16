import { IDataSlice, IDataSliceName } from './types';

export const DATA_SLICE_DEFAULT: IDataSlice = {
	themes: [],
	questions: [],
	ui: {
		isSearchActive: false,
		searchText: '',
		searchTags: [],
		isCreateThemeActive: false,
		themeToCreateQuestion: null,
		themeToDelete: null,
		questionToDelete: null,
		themeToEdit: null,
		questionToEdit: null,
	},
};

export const DATA_SLICE_NAME: IDataSliceName = 'dataSlice';
