import {
	getRandomBoolean,
	getRandomInt,
	getRandomLetterString,
	getRandomSentence,
	getUUIDv7,
} from '../../Utils';
import { LOCAL_STORAGE_KEY } from '../constants';
import { IStoreType } from '../types';
import { DATA_SLICE_DEFAULT } from './constants';
import { IDataSlice, IQuestion, ITheme } from './types';

export const generateInitialData = (): IDataSlice => {
	const themesCount = 30;
	const questionsMin = 3;
	const questionsMax = 15;
	const tagsMin = 0;
	const tagsMax = 5;

	const themes: ITheme[] = [];
	const questionsGlobal: IQuestion[] = [];

	for (let i = 0; i < themesCount; i++) {
		const id = getUUIDv7();
		const name = getRandomSentence(getRandomInt(2, 5));
		const description = getRandomSentence(getRandomInt(5, 9));
		const questionsCount = getRandomInt(questionsMin, questionsMax);
		const questions: IQuestion[] = [];
		for (let j = 0; j < questionsCount; j++) {
			const questionId = getUUIDv7();
			const question = getRandomSentence(getRandomInt(5, 9));
			const answer = getRandomSentence(getRandomInt(5, 15));
			const isLearnt = getRandomBoolean();
			const tagsCount = getRandomInt(tagsMin, tagsMax);
			const tags: string[] = [];
			for (let k = 0; k < tagsCount; k++) {
				const tag = getRandomLetterString(getRandomInt(5, 10));
				tags.push(tag);
			}

			const currentQuestion = {
				id: questionId,
				themeId: id,
				question,
				answer,
				isLearnt,
				tags,
			};

			questions.push(currentQuestion);
			questionsGlobal.push(currentQuestion);
		}

		themes.push({ id, name, description, questions });
	}

	return { themes, questions: questionsGlobal, ui: DATA_SLICE_DEFAULT.ui };
};

export const restoreLocalStorage = (): IDataSlice => {
	const store: string | null = localStorage.getItem(LOCAL_STORAGE_KEY);
	if (!store) {
		return DATA_SLICE_DEFAULT;
	}

	const storeParsed: IStoreType = JSON.parse(store);

	return storeParsed.dataSlice;
};
