import { ComponentProps } from 'react';
import { useNavigate } from 'react-router-dom';
import { IQuestion, setQuestionToDelete, setQuestionToEdit } from '../../Store';
import { renderTag } from './renders';
import { useDispatch } from 'react-redux';
import { IButtonIconProps } from '../ButtonIcon';

export const useQuestionCard = ({ question }: { question: IQuestion }) => {
	const navigate = useNavigate();
	const dispatch = useDispatch();

	const handleClick: ComponentProps<'button'>['onClick'] = () => {
		navigate(`/interview_support/question/${question.id}`);
	};

	const handleEdit: IButtonIconProps['onClick'] = (event) => {
		event.stopPropagation();
		dispatch(setQuestionToEdit({ id: question.id }));
	};

	const handleDelete: IButtonIconProps['onClick'] = (event) => {
		event.stopPropagation();
		dispatch(setQuestionToDelete({ id: question.id }));
	};

	const tags = question.tags.map(renderTag);

	return { tags, handleClick, handleEdit, handleDelete };
};
