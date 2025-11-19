import { createSelector } from '@reduxjs/toolkit';
import {
	IDataSlice,
	IDataSliceSelectors,
	IGetMaterial,
	IGetQuestion,
	IGetTheme,
	IHistoryStatistics,
	IMaterial,
	IQuestion,
	IQuestionExtended,
	IStatistics,
	ITheme,
	IThemeExtended,
	IUserInterface,
} from './types';
import { selectSelf, selectSelfWithParams } from '../utils';
import { getQuestionMastery, getResultByProgress } from './utils';
import { IDataItem } from '../../Components/LineChart/types';
import { isAfter, isBefore, isSameDay, subDays, subMonths } from 'date-fns';

export const uiSelector: IDataSliceSelectors['getUI'] = createSelector<
	[typeof selectSelf<IDataSlice>],
	IUserInterface
>(selectSelf, (state) => state.ui);

export const questionsSelector: IDataSliceSelectors['getQuestions'] =
	createSelector<[typeof selectSelf<IDataSlice>], IQuestion[]>(
		selectSelf,
		(state) => state.questions,
	);
export const materialsSelector: IDataSliceSelectors['getMaterials'] =
	createSelector<[typeof selectSelf<IDataSlice>], IMaterial[]>(
		selectSelf,
		(state) => state.materials,
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

export const getStatisticsSelector: IDataSliceSelectors['getStatistics'] =
	createSelector<[typeof selectSelf<IDataSlice>], IStatistics>(
		selectSelf,
		(state) => {
			const { materials, questions, themes } = state;
			const checkSessionIds = new Set<string>([]);
			const readSessionIds = new Set<string>([]);
			let recentActivity: IHistoryStatistics[] = [];
			const overallMastery =
				questions.length > 0
					? Math.floor(
							questions.reduce((count, question) => {
								const { progress } = getQuestionMastery(question.history);
								count += progress;
								recentActivity = [
									...recentActivity,
									...question.history.map((history) => ({
										...history,
										question,
										themeTitle:
											themes.find(({ id }) => question.themeId === id)?.name ??
											'',
									})),
								];
								for (let history of question.history) {
									checkSessionIds.add(history.id);
								}

								return count;
							}, 0) / questions.length,
						)
					: 0;

			materials.forEach((material) => {
				recentActivity = [
					...recentActivity,
					...material.history.map((history) => ({
						...history,
						material,
						themeTitle:
							themes.find(({ id }) => material.themeId === id)?.name ?? '',
					})),
				];
				for (let history of material.history) {
					readSessionIds.add(history.id);
				}
			});

			let currentDate = new Date();
			let firstHistoryDate = currentDate;

			questions.forEach((question) => {
				question.history.forEach((history) => {
					if (isBefore(history.date, firstHistoryDate)) {
						firstHistoryDate = history.date;
					}
				});
			});

			const firstDate = isBefore(firstHistoryDate, subMonths(new Date(), 1))
				? subMonths(new Date(), 1)
				: subDays(firstHistoryDate, 1);

			const studiedQuestionsSeries: IDataItem[] = [];
			const readMaterialsSeries: IDataItem[] = [];
			const masterySeries: IDataItem[] = [];

			while (isAfter(currentDate, firstDate)) {
				const studyIds = new Set<string>([]);
				const readIds = new Set<string>([]);

				let mastery = 0;

				questions.forEach((question) => {
					question.history.forEach((history) => {
						if (isSameDay(history.date, currentDate)) {
							studyIds.add(history.id);
						}
					});
					const { progress } = getQuestionMastery(
						question.history.filter((history) =>
							isBefore(history.date, currentDate),
						),
					);
					mastery += progress;
				});
				materials.forEach((material) => {
					material.history.forEach((history) => {
						if (isSameDay(history.date, currentDate)) {
							readIds.add(history.id);
						}
					});
				});

				studiedQuestionsSeries.push({
					date: currentDate,
					value: studyIds.size,
				});
				readMaterialsSeries.push({
					date: currentDate,
					value: readIds.size,
				});
				masterySeries.push({
					date: currentDate,
					value: Math.floor(mastery / questions.length),
				});
				currentDate = subDays(currentDate, 1);
			}

			return {
				recentActivity: recentActivity
					.sort((a, b) => +new Date(b.date) - +new Date(a.date))
					.slice(0, 30),
				totalThemes: themes.length,
				totalQuestions: questions.length,
				totalMaterials: materials.length,
				totalStudySessions: checkSessionIds.size,
				totalMaterialsRead: readSessionIds.size,
				overallMastery: overallMastery,
				studiedQuestionsSeries: studiedQuestionsSeries.reverse(),
				readMaterialsSeries: readMaterialsSeries.reverse(),
				masterySeries: masterySeries.reverse(),
			};
		},
	);
