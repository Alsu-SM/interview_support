import { useDispatch, useSelector } from 'react-redux';
import {
	getTheme,
	ITheme,
	reorderMaterials,
	setThemeToCreateMaterial,
} from '../../Store';
import { renderMaterial } from './renders';
import { IOrderedListProps } from '../../Components/OrderedList/types';
import { createSelector } from '@reduxjs/toolkit';
import { selectDataSlice } from '../../Store/utils';
import { IStoreType } from '../../Store/types';

export const useThemeMaterialsList = ({ themeId }: { themeId: string }) => {
	const getThemeSelector = createSelector([selectDataSlice], (dataSlice) =>
		getTheme({ dataSlice }, { id: themeId }),
	);

	const themeData = useSelector<IStoreType, ITheme | undefined>(
		getThemeSelector,
	);
	const dispatch = useDispatch();

	const isThemeNotFound = !themeData;

	const materialsList = themeData?.materials?.map(renderMaterial) ?? [];

	const handleCreateMaterial = () => {
		dispatch(setThemeToCreateMaterial({ id: themeId }));
	};
	const handleReorder: IOrderedListProps['onReorder'] = (items) => {
		if (isThemeNotFound) {
			return;
		}

		dispatch(
			reorderMaterials({
				themeId: themeData.id,
				ids: items.map(({ id }) => id),
			}),
		);
	};

	return {
		isThemeNotFound,
		materialsList,
		handleReorder,
		handleCreateMaterial,
	};
};
