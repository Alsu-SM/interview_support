import { QuestionTag } from './styled';

export const renderTag = (tag: string) => {
	return <QuestionTag key={tag}>#{tag}</QuestionTag>;
};
