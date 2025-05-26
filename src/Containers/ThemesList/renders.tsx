import { IOrderedListProps } from '../../Components/OrderedList/types';
import { ThemeCard } from '../../Components/ThemeCard';
import { ITheme } from '../../Store';

export const renderTheme = (
	theme: ITheme,
): IOrderedListProps['items'][number] => {
	return {
		id: theme.id,
		element: <ThemeCard themeData={theme} key={theme.id} id={theme.id} />,
	};
};
