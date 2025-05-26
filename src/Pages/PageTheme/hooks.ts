import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { getThemeExtended, IThemeExtended } from '../../Store';
import { IStoreType } from '../../Store/types';
import { createSelector } from '@reduxjs/toolkit';
import { selectDataSlice } from '../../Store/utils';

export const usePageTheme = () => {
	const { id } = useParams();
	const getThemeExtendedSelector = createSelector(
		[selectDataSlice],
		(dataSlice) => getThemeExtended({ dataSlice }, { id: id ?? '' }),
	);

	const themeData = useSelector<IStoreType, IThemeExtended | undefined>(
		getThemeExtendedSelector,
	);

	return { themeData };
};
