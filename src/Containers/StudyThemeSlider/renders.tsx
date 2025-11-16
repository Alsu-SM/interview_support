import {
	QuestionResult,
	QuestionResultQuestionLabel,
	QuestionResultTag,
} from './styled';
import { IThemeStudyDataItem } from './types';

export const renderThemeReview = (item: IThemeStudyDataItem) => (
	<QuestionResult key={item.id}>
		<QuestionResultQuestionLabel>{item.question}</QuestionResultQuestionLabel>
		<QuestionResultTag label={item.result ?? 'unknown'} result={item.result} />
	</QuestionResult>
);
