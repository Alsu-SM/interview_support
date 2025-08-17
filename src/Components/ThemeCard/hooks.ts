import { ComponentProps } from 'react';
import { useNavigate } from 'react-router-dom';
import { getThemeExtended, ITheme, IThemeExtended } from '../../Store';
import { useSelector } from 'react-redux';
import { createSelector } from '@reduxjs/toolkit';
import { selectDataSlice } from '../../Store/utils';
import { IStoreType } from '../../Store/types';

export const useThemeCard = ({ theme }: { theme: ITheme }) => {
	const getThemeSelector = createSelector([selectDataSlice], (dataSlice) =>
		getThemeExtended({ dataSlice }, { id: theme.id }),
	);

	const themeData = useSelector<IStoreType, IThemeExtended | undefined>(
		getThemeSelector,
	);
	const progress = Math.floor(themeData?.progress ?? 0);
	const studiedQuestionsCount = themeData?.studiedQuestionsCount ?? 0;
	const tagsList = themeData?.tags ?? [];

	const allTags = tagsList.map((tag) => `#${tag}`).join(' ');
	const shownTags = tagsList
		.slice(0, 3)
		.map((tag) => `#${tag}`)
		.join(' ');
	const tagsMore =
		tagsList.length > 3 ? ` and ${tagsList.length - 3} more` : '';
	const navigate = useNavigate();

	const handleClick: ComponentProps<'button'>['onClick'] = () => {
		navigate(`/interview_support/theme/${theme.id}`);
	};

	return {
		progress,
		studiedQuestionsCount,
		allTags,
		shownTags,
		tagsMore,
		handleClick,
	};
};
