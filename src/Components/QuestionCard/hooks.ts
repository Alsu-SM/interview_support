import { ComponentProps } from 'react';
import { useNavigate } from 'react-router-dom';
import { IQuestion } from '../../Store';
import { renderTag } from './renders';

export const useQuestionCard = ({ question }: { question: IQuestion }) => {
	const navigate = useNavigate();

	const handleClick: ComponentProps<'button'>['onClick'] = () => {
		navigate(`/interview_support/question/${question.id}`);
	};

	const tags = question.tags.slice(0, 3).map(renderTag);
	const tagsMessage =
		tags.length === question.tags.length
			? ''
			: `and ${question.tags.length - tags.length} more`;

	return { tags, tagsMessage, handleClick };
};
