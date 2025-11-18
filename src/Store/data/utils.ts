import { LOCAL_STORAGE_KEY } from '../constants';
import { IStoreType } from '../types';
import { DATA_SLICE_DEFAULT } from './constants';

import { IDataSlice, IHistoryItemChecked, IHistoryResult } from './types';

export const restoreLocalStorage = (): IDataSlice => {
	const store: string | null = localStorage.getItem(LOCAL_STORAGE_KEY);
	if (!store) {
		return DATA_SLICE_DEFAULT;
	}

	const storeParsed: IStoreType = JSON.parse(store);

	return storeParsed.dataSlice;
};

export const getResultByProgress = (progress: number): IHistoryResult => {
	if (progress >= 90) {
		return IHistoryResult.Easy;
	}

	if (progress >= 55) {
		return IHistoryResult.Medium;
	}

	return IHistoryResult.Hard;
};

export const getQuestionMastery = (
	history: IHistoryItemChecked[],
): { progress: number; result: IHistoryResult | null } => {
	if (history.length === 0) return { progress: 0, result: null };

	const weights = {
		[IHistoryResult.Easy]: 1.0,
		[IHistoryResult.Medium]: 0.6,
		[IHistoryResult.Hard]: 0.2,
	} as const satisfies Record<IHistoryResult, number>;

	// Берем последние 10 ответов (или все, если меньше)
	const recentHistory = history.slice(-10);

	let weightedSum = 0;
	let totalWeight = 0;

	// Экспоненциальное взвешивание: последние ответы важнее
	recentHistory.forEach((record, index) => {
		const timeWeight = Math.pow(0.8, recentHistory.length - 1 - index); // Последний = 0.8^0 = 1, предпоследний = 0.8^1 = 0.8 и т.д.
		const difficultyWeight = weights[record.result];

		weightedSum += difficultyWeight * timeWeight;
		totalWeight += timeWeight;
	});

	const progress = Math.floor((weightedSum / totalWeight) * 100);
	return { progress, result: getResultByProgress(progress) };
};
