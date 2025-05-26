import { CaseReducer, Selector } from '@reduxjs/toolkit';
import { IAppTheme } from '../../theme';

export enum IAppThemeType {
	Light = 'light',
	Dark = 'dark',
}

export interface IAppThemeSlice {
	type: IAppThemeType;
	theme: IAppTheme;
	greetings: string;
}

export type IAppThemeSliceName = 'appThemeSlice';

export interface IChangeTheme {
	theme: IAppThemeSlice['type'];
}

export interface IChangeGreetings {
	greetings: IAppThemeSlice['greetings'];
}

export type IAppThemeSliceReducers = {
	changeAppTheme: CaseReducer<
		IAppThemeSlice,
		{
			payload: IChangeTheme;
			type: string;
		}
	>;
	changeGreetings: CaseReducer<
		IAppThemeSlice,
		{
			payload: IChangeGreetings;
			type: string;
		}
	>;
};

export type IAppThemeSliceSelectors = {
	getAppThemeType: Selector<IAppThemeSlice, IAppThemeSlice['type']>;
	getAppTheme: Selector<IAppThemeSlice, IAppThemeSlice['theme']>;
	getAppThemeGreetings: Selector<IAppThemeSlice, IAppThemeSlice['greetings']>;
};
