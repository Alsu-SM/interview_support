import { IOrderedListProps } from '../../Components/OrderedList/types';
import { QuestionCard } from '../../Components/QuestionCard';
import { IQuestion } from '../../Store';

export const renderQuestion = (
	question: IQuestion,
): IOrderedListProps['items'][number] => {
	return {
		id: question.id,
		element: (
			<QuestionCard question={question} key={question.id} id={question.id} />
		),
	};
};
