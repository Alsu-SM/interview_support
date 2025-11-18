import { IHistoryResult } from '../../Store';
import {
	QuestionResult,
	QuestionResultQuestionLabel,
	QuestionResultTag,
} from './styled';
import { IThemeStudyDataItem } from './types';

export const renderThemeReview = (item: IThemeStudyDataItem) => (
	<QuestionResult key={item.id}>
		<QuestionResultQuestionLabel>{item.question}</QuestionResultQuestionLabel>
		<QuestionResultTag
			label={item.result ?? 'unknown'}
			success={item.result === IHistoryResult.Easy}
			warning={item.result === IHistoryResult.Medium}
			danger={item.result === IHistoryResult.Hard}
		/>
	</QuestionResult>
);
