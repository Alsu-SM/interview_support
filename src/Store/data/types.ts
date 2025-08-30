import { CaseReducer, Selector } from '@reduxjs/toolkit';

export interface IQuestion {
	id: string;
	themeId: string;
	question: string;
	answer: string;
	isLearnt: boolean;
	tags: string[];
}

export interface ITheme {
	id: string;
	name: string;
	description: string;
	questions: IQuestion[];
}

export interface IThemeExtended extends ITheme {
	isLearnt: boolean;
	progress: number;
	studiedQuestionsCount: number;
	tags: string[];
}

export interface IQuestionExtended extends IQuestion {
	theme?: ITheme;
}

export interface IUserInterface {
	isSearchActive: boolean;
	searchText: string;
	searchTags: string[];
	isFocusMode: boolean;
	isCreateThemeActive: boolean;
	isCreateQuestionActive: boolean;
	themeToDelete: ITheme['id'] | null;
	questionToDelete: IQuestion['id'] | null;
	themeToEdit: ITheme['id'] | null;
	questionToEdit: IQuestion['id'] | null;
}

export interface IDataSlice {
	themes: ITheme[];
	questions: IQuestion[];
	ui: IUserInterface;
}

export type IDataSliceName = 'dataSlice';

export interface ICreateQuestion {
	question: Omit<IQuestion, 'id'>;
}

export interface ISetQuestion {
	id: IQuestion['id'] | null;
}

export interface IEditQuestion {
	question: Partial<Omit<IQuestion, 'id'>>;
	id: IQuestion['id'];
}

export interface ICreateTheme {
	theme: Omit<ITheme, 'id'>;
}

export interface ISetTheme {
	id: ITheme['id'] | null;
}

export interface IEditTheme {
	theme: Partial<Omit<ITheme, 'id'>>;
	id: ITheme['id'];
}

export interface IReorderThemes {
	ids: ITheme['id'][];
}

export interface IReorderQuestions {
	themeId: ITheme['id'];
	ids: IQuestion['id'][];
}

export interface ISetIsActive {
	isActive: boolean;
}

export enum IDataSliceActions {
	CreateQuestion = 'createQuestion',
	DeleteQuestion = 'deleteQuestion',
	EditQuestion = 'editQuestion',
	CreateTheme = 'createTheme',
	DeleteTheme = 'deleteTheme',
	EditTheme = 'editTheme',
	ReorderTheme = 'reorderThemes',
	ReorderQuestions = 'reorderQuestions',
	SetIsCreateThemeActive = 'setIsCreateThemeActive',
	SetIsCreateQuestionActive = 'setIsCreateQuestionActive',
	SetThemeToDelete = 'setThemeToDelete',
	SetQuestionToDelete = 'setQuestionToDelete',
	SetThemeToEdit = 'setThemeToEdit',
	SetQuestionToEdit = 'setQuestionToEdit',
}

export type IDataSliceReducers = {
	[IDataSliceActions.CreateQuestion]: CaseReducer<
		IDataSlice,
		{
			payload: ICreateQuestion;
			type: string;
		}
	>;
	[IDataSliceActions.SetQuestionToDelete]: CaseReducer<
		IDataSlice,
		{
			payload: ISetQuestion;
			type: string;
		}
	>;
	[IDataSliceActions.SetQuestionToEdit]: CaseReducer<
		IDataSlice,
		{
			payload: ISetQuestion;
			type: string;
		}
	>;
	[IDataSliceActions.DeleteQuestion]: CaseReducer<
		IDataSlice,
		{
			payload: ISetQuestion;
			type: string;
		}
	>;
	[IDataSliceActions.EditQuestion]: CaseReducer<
		IDataSlice,
		{
			payload: IEditQuestion;
			type: string;
		}
	>;
	[IDataSliceActions.CreateTheme]: CaseReducer<
		IDataSlice,
		{
			payload: ICreateTheme;
			type: string;
		}
	>;
	[IDataSliceActions.SetThemeToDelete]: CaseReducer<
		IDataSlice,
		{
			payload: ISetTheme;
			type: string;
		}
	>;
	[IDataSliceActions.SetThemeToEdit]: CaseReducer<
		IDataSlice,
		{
			payload: ISetTheme;
			type: string;
		}
	>;
	[IDataSliceActions.DeleteTheme]: CaseReducer<
		IDataSlice,
		{
			payload: ISetTheme;
			type: string;
		}
	>;
	[IDataSliceActions.EditTheme]: CaseReducer<
		IDataSlice,
		{
			payload: IEditTheme;
			type: string;
		}
	>;
	[IDataSliceActions.ReorderTheme]: CaseReducer<
		IDataSlice,
		{
			payload: IReorderThemes;
			type: string;
		}
	>;
	[IDataSliceActions.ReorderQuestions]: CaseReducer<
		IDataSlice,
		{
			payload: IReorderQuestions;
			type: string;
		}
	>;
	[IDataSliceActions.ReorderQuestions]: CaseReducer<
		IDataSlice,
		{
			payload: IReorderQuestions;
			type: string;
		}
	>;
	[IDataSliceActions.SetIsCreateThemeActive]: CaseReducer<
		IDataSlice,
		{
			payload: ISetIsActive;
			type: string;
		}
	>;
};

export interface IGetQuestion {
	id: IQuestion['id'];
}

export interface IGetTheme {
	id: ITheme['id'];
}

export interface IGetUI {
	id: ITheme['id'];
}

export type IDataSliceSelectors = {
	getUI: Selector<IDataSlice, IUserInterface>;
	getQuestions: Selector<IDataSlice, IQuestion[]>;
	getThemes: Selector<IDataSlice, ITheme[]>;
	getQuestion: Selector<IDataSlice, IQuestion | undefined, [IGetQuestion]>;
	getQuestionExtended: Selector<
		IDataSlice,
		IQuestionExtended | undefined,
		[IGetQuestion]
	>;
	getTheme: Selector<IDataSlice, ITheme | undefined, [IGetTheme]>;
	getThemeExtended: Selector<
		IDataSlice,
		IThemeExtended | undefined,
		[IGetTheme]
	>;
};
