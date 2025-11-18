import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import {
	getThemeExtended,
	IThemeExtended,
	setThemeToCreateMaterial,
	setThemeToCreateQuestion,
} from '../../Store';
import { IStoreType } from '../../Store/types';
import { createSelector } from '@reduxjs/toolkit';
import { selectDataSlice } from '../../Store/utils';
import { renderTag } from '../../Components/Tag/utils';
import { useState } from 'react';
import { IThemePageTabValue } from './types';
import { ITabsProps } from '../../Components/Tabs';

export const usePageTheme = () => {
	const [tabValue, setTabValue] = useState<string>(IThemePageTabValue.Question);
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

	const handleTabChange: ITabsProps['onChange'] = (id) => {
		setTabValue(id);
	};

	const handleGoBack = () => {
		navigate(`/interview_support/`);
	};

	const handleCreate = () => {
		if (id && themeData) {
			dispatch(
				tabValue === IThemePageTabValue.Question
					? setThemeToCreateQuestion({ id })
					: setThemeToCreateMaterial({ id }),
			);
		}
	};

	const handleStudy = () => {
		if (id) {
			navigate(`/interview_support/study/${id}`);
		}
	};

	return {
		themeData,
		progress,
		tags,
		tabValue,
		handleTabChange,
		handleStudy,
		handleGoBack,
		handleCreateQuestion: handleCreate,
	};
};
