import { createSlice } from '@reduxjs/toolkit';
import { DATA_SLICE_NAME } from './constants';
import {
	createQuestionReducer,
	createThemeReducer,
	deleteQuestionReducer,
	deleteThemeReducer,
	editQuestionReducer,
	editThemeReducer,
	reorderQuestionsReducer,
	reorderThemesReducer,
	setIsCreateThemeActiveReducer,
	setQuestionToDeleteReducer,
	setQuestionToEditReducer,
	setThemeToDeleteReducer,
	setThemeToEditReducer,
} from './reducers';
import {
	IDataSlice,
	IDataSliceName,
	IDataSliceReducers,
	IDataSliceSelectors,
} from './types';
import {
	getQuestionExtendedSelector,
	getQuestionSelector,
	getThemeExtendedSelector,
	getThemeSelector,
	questionsSelector,
	themesSelector,
	uiSelector,
} from './selectors';
import { restoreLocalStorage } from './utils';

const dataSlice = createSlice<
	IDataSlice,
	IDataSliceReducers,
	IDataSliceName,
	IDataSliceSelectors
>({
	name: DATA_SLICE_NAME,
	initialState: restoreLocalStorage(),
	reducers: {
		createQuestion: createQuestionReducer,
		editQuestion: editQuestionReducer,
		setQuestionToDelete: setQuestionToDeleteReducer,
		setQuestionToEdit: setQuestionToEditReducer,
		deleteQuestion: deleteQuestionReducer,
		createTheme: createThemeReducer,
		editTheme: editThemeReducer,
		setThemeToDelete: setThemeToDeleteReducer,
		setThemeToEdit: setThemeToEditReducer,
		deleteTheme: deleteThemeReducer,
		reorderThemes: reorderThemesReducer,
		reorderQuestions: reorderQuestionsReducer,
		setIsCreateThemeActive: setIsCreateThemeActiveReducer,
	},
	selectors: {
		getUI: uiSelector,
		getQuestions: questionsSelector,
		getThemes: themesSelector,
		getQuestion: getQuestionSelector,
		getQuestionExtended: getQuestionExtendedSelector,
		getTheme: getThemeSelector,
		getThemeExtended: getThemeExtendedSelector,
	},
});

export const {
	createQuestion,
	editQuestion,
	deleteQuestion,
	createTheme,
	editTheme,
	deleteTheme,
	reorderThemes,
	reorderQuestions,
	setIsCreateThemeActive,
	setQuestionToDelete,
	setQuestionToEdit,
	setThemeToDelete,
	setThemeToEdit,
} = dataSlice.actions;

export const {
	getUI,
	getQuestions,
	getThemes,
	getQuestion,
	getQuestionExtended,
	getTheme,
	getThemeExtended,
} = dataSlice.selectors;

export default dataSlice.reducer;
