import { useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { getThemeExtended, IThemeExtended } from '../../Store';
import { IStoreType } from '../../Store/types';
import { createSelector } from '@reduxjs/toolkit';
import { selectDataSlice } from '../../Store/utils';
import { renderTag } from './renders';

export const usePageTheme = () => {
	const { id } = useParams();
	const navigate = useNavigate();

	const getThemeExtendedSelector = createSelector(
		[selectDataSlice],
		(dataSlice) => getThemeExtended({ dataSlice }, { id: id ?? '' }),
	);

	const themeData = useSelector<IStoreType, IThemeExtended | undefined>(
		getThemeExtendedSelector,
	);

	const progress = Math.floor(themeData?.progress ?? 0);
	const tags = (themeData?.tags ?? []).map(renderTag);

	const handleGoBack = () => {
		navigate(`/interview_support/`);
	};

	return { themeData, progress, tags, handleGoBack };
};
