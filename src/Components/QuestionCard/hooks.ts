import { ComponentProps } from 'react';
import { useNavigate } from 'react-router-dom';
import {
	getQuestionExtended,
	IQuestion,
	IQuestionExtended,
	setQuestionToDelete,
	setQuestionToEdit,
} from '../../Store';
import { useDispatch, useSelector } from 'react-redux';
import { IButtonIconProps } from '../ButtonIcon';
import { renderTag } from '../Tag/utils';
import { createSelector } from '@reduxjs/toolkit';
import { selectDataSlice } from '../../Store/utils';
import { IStoreType } from '../../Store/types';

export const useQuestionCard = ({ question }: { question: IQuestion }) => {
	const navigate = useNavigate();
	const dispatch = useDispatch();

	const getThemeExtendedSelector = createSelector(
		[selectDataSlice],
		(dataSlice) => getQuestionExtended({ dataSlice }, { id: question.id }),
	);

	const questionData = useSelector<IStoreType, IQuestionExtended | undefined>(
		getThemeExtendedSelector,
	);

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

	const tags = question.tags.map((tag) => renderTag({ label: tag }));

	return { tags, questionData, handleClick, handleEdit, handleDelete };
};
