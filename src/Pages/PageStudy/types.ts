import { IHistoryItem, IHistoryResult, IQuestion } from '../../Store';

export interface IThemeStudyDataItem {
	id: IHistoryItem['id'];
	questionId: IQuestion['id'];
	question: string;
	result: IHistoryResult | null;
}
