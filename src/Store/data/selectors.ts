import { createSelector } from '@reduxjs/toolkit';
import {
	IDataSlice,
	IDataSliceSelectors,
	IGetMaterial,
	IGetQuestion,
	IGetTheme,
	IMaterial,
	IQuestion,
	IQuestionExtended,
	ITheme,
	IThemeExtended,
	IUserInterface,
} from './types';
import { selectSelf, selectSelfWithParams } from '../utils';
import { getQuestionMastery, getResultByProgress } from './utils';

export const uiSelector: IDataSliceSelectors['getUI'] = createSelector<
	[typeof selectSelf<IDataSlice>],
	IUserInterface
>(selectSelf, (state) => state.ui);

export const questionsSelector: IDataSliceSelectors['getQuestions'] =
	createSelector<[typeof selectSelf<IDataSlice>], IQuestion[]>(
		selectSelf,
		(state) => state.questions,
	);

export const themesSelector: IDataSliceSelectors['getThemes'] = createSelector<
	[typeof selectSelf<IDataSlice>],
	ITheme[]
>(selectSelf, (state) => state.themes);

export const getQuestionSelector: IDataSliceSelectors['getQuestion'] =
	createSelector<
		[typeof selectSelfWithParams<IDataSlice, IGetQuestion>],
		IQuestion | undefined
	>(selectSelfWithParams, ({ state, params }) =>
		state.questions.find((question) => question.id === params.id),
	);
export const getMaterialSelector: IDataSliceSelectors['getMaterial'] =
	createSelector<
		[typeof selectSelfWithParams<IDataSlice, IGetMaterial>],
		IMaterial | undefined
	>(selectSelfWithParams, ({ state, params }) =>
		state.materials.find((material) => material.id === params.id),
	);

export const getQuestionExtendedSelector: IDataSliceSelectors['getQuestionExtended'] =
	createSelector<
		[typeof selectSelfWithParams<IDataSlice, IGetQuestion>],
		IQuestionExtended | undefined
	>(selectSelfWithParams, ({ state, params }) => {
		const question = state.questions.find(
			(question) => question.id === params.id,
		);

		if (!question) {
			return question;
		}

		const theme = state.themes.find((theme) => theme.id === question?.themeId);

		const { progress, result } = getQuestionMastery(question.history);

		return { ...question, theme, progress, result };
	});

export const getThemeSelector: IDataSliceSelectors['getTheme'] = createSelector<
	[typeof selectSelfWithParams<IDataSlice, IGetTheme>],
	ITheme | undefined
>(selectSelfWithParams, ({ state, params }) =>
	state.themes.find((theme) => theme.id === params.id),
);

export const getThemeExtendedSelector: IDataSliceSelectors['getThemeExtended'] =
	createSelector<
		[typeof selectSelfWithParams<IDataSlice, IGetTheme>],
		IThemeExtended | undefined
	>(selectSelfWithParams, ({ state, params }) => {
		const theme = state.themes.find((theme) => theme.id === params.id);
		if (!theme) {
			return theme;
		}

		const questions = state.questions.filter(
			(question) => question.themeId === params.id,
		);

		const materials = state.materials.filter(
			(material) => material.themeId === params.id,
		);

		const tags = Array.from(
			new Set([
				...questions.reduce((tags: string[], question) => {
					return [...tags, ...question.tags];
				}, []),
				...materials.reduce((tags: string[], material) => {
					return [...tags, ...material.tags];
				}, []),
			]),
		);

		const avgProgress = Math.floor(
			questions.reduce((count, question) => {
				const { progress } = getQuestionMastery(question.history);
				count += progress;

				return count;
			}, 0) / questions.length,
		);

		const avgResult = getResultByProgress(avgProgress);

		return {
			...theme,
			questions,
			tags,
			progress: avgProgress,
			result: avgResult,
		};
	});
