import { createSelector } from '@reduxjs/toolkit';
import { selectSelf } from '../utils';
import { IAppThemeSlice, IAppThemeSliceSelectors } from './types';

export const getTypeSelector: IAppThemeSliceSelectors['getAppThemeType'] =
	createSelector<[typeof selectSelf<IAppThemeSlice>], IAppThemeSlice['type']>(
		selectSelf<IAppThemeSlice>,
		(state) => state.type,
	);

export const getThemeSelector: IAppThemeSliceSelectors['getAppTheme'] =
	createSelector<[typeof selectSelf<IAppThemeSlice>], IAppThemeSlice['theme']>(
		selectSelf<IAppThemeSlice>,
		(state) => state.theme,
	);

export const getAppThemeGreetingsSelector: IAppThemeSliceSelectors['getAppThemeGreetings'] =
	createSelector<
		[typeof selectSelf<IAppThemeSlice>],
		IAppThemeSlice['greetings']
	>(selectSelf<IAppThemeSlice>, (state) => state.greetings);
