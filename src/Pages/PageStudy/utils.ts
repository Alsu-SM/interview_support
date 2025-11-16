import { IQuestion } from '../../Store';
import { getUUIDv7 } from '../../Utils';
import { IThemeStudyDataItem } from './types';

export const createStudyDataInitial = (
	questions: IQuestion[],
): IThemeStudyDataItem[] =>
	questions.map((question) => ({
		id: getUUIDv7(),
		questionId: question.id,
		question: question.question,
		result: null,
	}));
