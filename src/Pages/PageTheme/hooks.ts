import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import {
	getThemeExtended,
	IThemeExtended,
	setThemeToCreateQuestion,
} from '../../Store';
import { IStoreType } from '../../Store/types';
import { createSelector } from '@reduxjs/toolkit';
import { selectDataSlice } from '../../Store/utils';
import { renderTag } from '../../Components/Tag/utils';

export const usePageTheme = () => {
	const { id } = useParams();
	const dispatch = useDispatch();

	const navigate = useNavigate();

	const getThemeExtendedSelector = createSelector(
		[selectDataSlice],
		(dataSlice) => getThemeExtended({ dataSlice }, { id: id ?? '' }),
	);

	const themeData = useSelector<IStoreType, IThemeExtended | undefined>(
		getThemeExtendedSelector,
	);

	const progress = Math.floor(themeData?.progress ?? 0);
	const tags = (themeData?.tags ?? []).map((tag) => renderTag({ label: tag }));

	const handleGoBack = () => {
		navigate(`/interview_support/`);
	};

	const handleCreateQuestion = () => {
		if (id && themeData) {
			dispatch(setThemeToCreateQuestion({ id }));
		}
	};
	return {
		themeData,
		progress,
		tags,
		handleGoBack,
		handleCreateQuestion,
	};
};
