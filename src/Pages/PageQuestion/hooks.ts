import { useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { getQuestionExtended, IQuestionExtended } from '../../Store';
import { IStoreType } from '../../Store/types';
import { createSelector } from '@reduxjs/toolkit';
import { selectDataSlice } from '../../Store/utils';
import { renderTag } from '../../Components/Tag/utils';

export const usePageQuestion = () => {
	const { id } = useParams();
	const navigate = useNavigate();

	const getQuestionExtendedSelector = createSelector(
		[selectDataSlice],
		(dataSlice) => getQuestionExtended({ dataSlice }, { id: id ?? '' }),
	);

	const question = useSelector<IStoreType, IQuestionExtended | undefined>(
		getQuestionExtendedSelector,
	);

	const themeId = question?.themeId;
	const goBackTitle = !!themeId ? 'Back to Theme' : 'Back to Dashboard';
	const tags = (question?.tags ?? []).map((tag) => renderTag({ label: tag }));

	const handleGoBack = () => {
		navigate(
			themeId ? `/interview_support/theme/${themeId}` : `/interview_support/`,
		);
	};

	return {
		question,
		goBackTitle,
		tags,
		handleGoBack,
	};
};
