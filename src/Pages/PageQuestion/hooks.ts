import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { getQuestionExtended, IQuestionExtended } from '../../Store';
import { IStoreType } from '../../Store/types';
import { createSelector } from '@reduxjs/toolkit';
import { selectDataSlice } from '../../Store/utils';

export const usePageQuestion = () => {
	const { id } = useParams();
	const getQuestionExtendedSelector = createSelector(
		[selectDataSlice],
		(dataSlice) => getQuestionExtended({ dataSlice }, { id: id ?? '' }),
	);

	const question = useSelector<IStoreType, IQuestionExtended | undefined>(
		getQuestionExtendedSelector,
	);

	return { question };
};
