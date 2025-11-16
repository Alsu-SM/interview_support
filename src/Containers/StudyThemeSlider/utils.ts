import { IHistoryResult, IQuestion } from '../../Store';
import { IAppTheme } from '../../theme';
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

export const getTagStyle = (
	result: IHistoryResult | null,
	theme: IAppTheme,
): { text: string; bg: string } | null => {
	switch (result) {
		case IHistoryResult.Easy:
			return { text: theme.text.success, bg: theme.bg.success };
		case IHistoryResult.Medium:
			return { text: theme.text.warning, bg: theme.bg.warning };
		case IHistoryResult.Hard:
			return { text: theme.text.danger, bg: theme.bg.danger };
		default:
			return null;
	}
};
