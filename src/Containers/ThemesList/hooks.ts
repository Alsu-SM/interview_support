import { useDispatch, useSelector } from 'react-redux';
import { getThemes, reorderThemes, setIsCreateThemeActive } from '../../Store';
import { renderTheme } from './renders';
import { IOrderedListProps } from '../../Components/OrderedList/types';

export const useThemesList = () => {
	const themes = useSelector(getThemes);
	const dispatch = useDispatch();

	const themesList = themes.map(renderTheme);

	const handleReorder: IOrderedListProps['onReorder'] = (items) => {
		dispatch(reorderThemes({ ids: items.map(({ id }) => id) }));
	};

	const handleCreateTheme = () => {
		dispatch(setIsCreateThemeActive({ isActive: true }));
	};

	return { themesList, handleReorder, handleCreateTheme };
};
