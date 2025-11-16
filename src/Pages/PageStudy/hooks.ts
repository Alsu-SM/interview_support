import { useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { getThemeExtended, IThemeExtended } from '../../Store';
import { IStoreType } from '../../Store/types';
import { createSelector } from '@reduxjs/toolkit';
import { selectDataSlice } from '../../Store/utils';

export const usePageStudy = () => {
	const { id } = useParams();

	const navigate = useNavigate();

	const getThemeExtendedSelector = createSelector(
		[selectDataSlice],
		(dataSlice) => getThemeExtended({ dataSlice }, { id: id ?? '' }),
	);

	const themeData = useSelector<IStoreType, IThemeExtended | undefined>(
		getThemeExtendedSelector,
	);

	const handleGoBack = () => {
		navigate(id ? `/interview_support/theme/${id}` : `/interview_support/`);
	};

	return {
		themeData,
		handleGoBack,
	};
};
