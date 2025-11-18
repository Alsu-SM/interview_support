import { ComponentProps } from 'react';
import { useNavigate } from 'react-router-dom';
import {
	getThemeExtended,
	ITheme,
	IThemeExtended,
	setThemeToDelete,
	setThemeToEdit,
} from '../../Store';
import { useDispatch, useSelector } from 'react-redux';
import { createSelector } from '@reduxjs/toolkit';
import { selectDataSlice } from '../../Store/utils';
import { IStoreType } from '../../Store/types';
import { IButtonIconProps } from '../ButtonIcon';
import { renderTag } from '../Tag/utils';

export const useThemeCard = ({ theme }: { theme: ITheme }) => {
	const dispatch = useDispatch();
	const getThemeSelector = createSelector([selectDataSlice], (dataSlice) =>
		getThemeExtended({ dataSlice }, { id: theme.id }),
	);

	const themeData = useSelector<IStoreType, IThemeExtended | undefined>(
		getThemeSelector,
	);
	const progress = Math.floor(themeData?.progress ?? 0);
	const tagsList = themeData?.tags ?? [];

	const allTags = tagsList.map((tag) => renderTag({ label: `#${tag}` }));

	const tagsMore =
		tagsList.length > 3 ? ` and ${tagsList.length - 3} more` : '';
	const navigate = useNavigate();

	const handleClick: ComponentProps<'button'>['onClick'] = () => {
		navigate(`/interview_support/theme/${theme.id}`);
	};

	const handleEdit: IButtonIconProps['onClick'] = (event) => {
		event.stopPropagation();
		dispatch(setThemeToEdit({ id: theme.id }));
	};

	const handleDelete: IButtonIconProps['onClick'] = (event) => {
		event.stopPropagation();
		dispatch(setThemeToDelete({ id: theme.id }));
	};

	return {
		progress,
		allTags,
		tagsMore,
		handleClick,
		handleEdit,
		handleDelete,
	};
};
