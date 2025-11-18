import { CaseReducer, Selector } from '@reduxjs/toolkit';

export enum IHistoryType {
	Read = 'read',
	Check = 'check',
}

export enum IHistoryResult {
	Hard = 'hard',
	Medium = 'medium',
	Easy = 'easy',
}

export interface IHistoryItemRead {
	id: string;
	date: Date;
	type: IHistoryType.Read;
}
export interface IHistoryItemChecked {
	id: string;
	date: Date;
	type: IHistoryType.Check;
	result: IHistoryResult;
}

export interface IQuestion {
	id: string;
	themeId: string;
	question: string;
	answer: string;
	tags: string[];
	history: IHistoryItemChecked[];
}

export interface IMaterial {
	id: string;
	title: string;
	themeId: string;
	material: string;
	tags: string[];
	history: IHistoryItemRead[];
}

export interface ITheme {
	id: string;
	name: string;
	description: string;
	questions: IQuestion[];
	materials: IMaterial[];
}

export interface IThemeExtended extends ITheme {
	tags: string[];
	progress: number;
	result: IHistoryResult;
}

export interface IQuestionExtended extends IQuestion {
	theme?: ITheme;
	progress: number;
	result: IHistoryResult | null;
}

export interface IUserInterface {
	isSearchActive: boolean;
	searchText: string;
	searchTags: string[];
	isCreateThemeActive: boolean;
	themeToCreateQuestion: ITheme['id'] | null;
	themeToCreateMaterial: ITheme['id'] | null;
	themeToDelete: ITheme['id'] | null;
	questionToDelete: IQuestion['id'] | null;
	themeToEdit: ITheme['id'] | null;
	questionToEdit: IQuestion['id'] | null;
	materialToEdit: IQuestion['id'] | null;
	materialToDelete: IQuestion['id'] | null;
}

export interface IDataSlice {
	themes: ITheme[];
	questions: IQuestion[];
	materials: IMaterial[];
	ui: IUserInterface;
}

export type IDataSliceName = 'dataSlice';

export interface ICreateQuestion {
	question: Omit<IQuestion, 'id' | 'history'>;
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

export interface IReorderMaterials {
	themeId: ITheme['id'];
	ids: IMaterial['id'][];
}

export interface IReorderQuestions {
	themeId: ITheme['id'];
	ids: IQuestion['id'][];
}

export interface ISetIsActive {
	isActive: boolean;
}

export interface IStudyQuestion {
	id: IQuestion['id'];
	historyItemId: IHistoryItemRead['id'];
	result: IHistoryResult;
}

export interface IEditStudyQuestion {
	id: IQuestion['id'];
	historyItemId: IHistoryItemRead['id'];
	result: IHistoryResult;
}

export interface ICreateMaterial {
	material: Omit<IMaterial, 'id' | 'history'>;
}

export interface ISetMaterial {
	id: IMaterial['id'] | null;
}

export interface IEditMaterial {
	material: Partial<Omit<IMaterial, 'id'>>;
	id: IMaterial['id'];
}

export interface IReadMaterial {
	id: IMaterial['id'];
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
	SetThemeToCreateQuestion = 'setThemeToCreateQuestion',
	SetThemeToCreateMaterial = 'setThemeToCreateMaterial',
	SetThemeToDelete = 'setThemeToDelete',
	SetQuestionToDelete = 'setQuestionToDelete',
	SetThemeToEdit = 'setThemeToEdit',
	SetQuestionToEdit = 'setQuestionToEdit',
	StudyQuestion = 'studyQuestion',
	EditStudyQuestion = 'editStudyQuestion',
	ReadMaterial = 'readMaterial',
	CreateMaterial = 'createMaterial',
	DeleteMaterial = 'deleteMaterial',
	EditMaterial = 'editMaterial',
	SetMaterialToDelete = 'setMaterialToDelete',
	SetMaterialToEdit = 'setMaterialToEdit',
	ReorderMaterials = 'reorderMaterials',
}

export type IDataSliceReducers = {
	[IDataSliceActions.SetThemeToCreateQuestion]: CaseReducer<
		IDataSlice,
		{
			payload: ISetQuestion;
			type: string;
		}
	>;
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
	[IDataSliceActions.StudyQuestion]: CaseReducer<
		IDataSlice,
		{
			payload: IStudyQuestion;
			type: string;
		}
	>;
	[IDataSliceActions.EditStudyQuestion]: CaseReducer<
		IDataSlice,
		{
			payload: IEditStudyQuestion;
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
	[IDataSliceActions.SetIsCreateThemeActive]: CaseReducer<
		IDataSlice,
		{
			payload: ISetIsActive;
			type: string;
		}
	>;
	[IDataSliceActions.ReadMaterial]: CaseReducer<
		IDataSlice,
		{
			payload: IReadMaterial;
			type: string;
		}
	>;
	[IDataSliceActions.CreateMaterial]: CaseReducer<
		IDataSlice,
		{
			payload: ICreateMaterial;
			type: string;
		}
	>;
	[IDataSliceActions.DeleteMaterial]: CaseReducer<
		IDataSlice,
		{
			payload: ISetMaterial;
			type: string;
		}
	>;
	[IDataSliceActions.EditMaterial]: CaseReducer<
		IDataSlice,
		{
			payload: IEditMaterial;
			type: string;
		}
	>;
	[IDataSliceActions.SetMaterialToEdit]: CaseReducer<
		IDataSlice,
		{
			payload: ISetMaterial;
			type: string;
		}
	>;
	[IDataSliceActions.SetMaterialToDelete]: CaseReducer<
		IDataSlice,
		{
			payload: ISetMaterial;
			type: string;
		}
	>;
	[IDataSliceActions.SetThemeToCreateMaterial]: CaseReducer<
		IDataSlice,
		{
			payload: ISetTheme;
			type: string;
		}
	>;
	[IDataSliceActions.ReorderMaterials]: CaseReducer<
		IDataSlice,
		{
			payload: IReorderMaterials;
			type: string;
		}
	>;
};

export interface IGetQuestion {
	id: IQuestion['id'];
}

export interface IGetMaterial {
	id: IMaterial['id'];
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
	getMaterial: Selector<IDataSlice, IMaterial | undefined, [IGetMaterial]>;
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
