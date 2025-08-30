import { createSelector } from '@reduxjs/toolkit';
import {
	IDataSlice,
	IDataSliceSelectors,
	IGetQuestion,
	IGetTheme,
	IQuestion,
	IQuestionExtended,
	ITheme,
	IThemeExtended,
	IUserInterface,
} from './types';
import { selectSelf, selectSelfWithParams } from '../utils';

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

		return { ...question, theme };
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

		const tags = Array.from(
			new Set(
				questions.reduce((tags: string[], question) => {
					return [...tags, ...question.tags];
				}, []),
			),
		);

		const studiedQuestionsCount = questions.reduce((count, question) => {
			if (question.isLearnt) {
				count++;
			}

			return count;
		}, 0);

		const isLearnt = studiedQuestionsCount === questions.length;

		const progress =
			questions.length === 0
				? 0
				: (studiedQuestionsCount / questions.length) * 100;

		return {
			...theme,
			questions,
			tags,
			isLearnt,
			progress,
			studiedQuestionsCount,
		};
	});
