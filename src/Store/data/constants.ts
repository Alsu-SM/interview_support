import initialData from './constants.internal';
import { IDataSlice, IDataSliceName } from './types';

export const DATA_SLICE_DEFAULT: IDataSlice = initialData;

// export const DATA_SLICE_DEFAULT: IDataSlice = {
// 	themes: [],
// 	questions: [],
// 	materials: [],
// 	ui: {
// 		isSearchActive: false,
// 		searchText: '',
// 		searchTags: [],
// 		isCreateThemeActive: false,
// 		themeToCreateQuestion: null,
// 		themeToDelete: null,
// 		questionToDelete: null,
// 		themeToEdit: null,
// 		questionToEdit: null,
// 		themeToCreateMaterial: null,
// 		materialToEdit: null,
// 		materialToDelete: null,
// 	},
// };

export const DATA_SLICE_NAME: IDataSliceName = 'dataSlice';
