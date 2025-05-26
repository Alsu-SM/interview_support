import styled from '@emotion/styled';
import { createCSSFunction } from '../../Utils/createCSSFunction';
import { cssScrollbar } from '../../Utils/scrollbar';
import { cssThemeCard } from '../../Components/ThemeCard';

export const cssThemesListOrderedListWrapper = createCSSFunction(
	({ theme }) => [
		{
			display: 'grid',
			gap: theme.spacing(4),
			overflow: 'hidden auto',
			gridTemplateColumns: `repeat(auto-fit, minmax(350px, 1fr))`,
			gridAutoRows: 'min-content',
		},
		cssScrollbar,
	],
);

export const ThemesListOrderedListWrapper = styled('div')(
	cssThemesListOrderedListWrapper,
);

export const CreateThemeButton = styled('button')(({ theme }) => [
	cssThemeCard,
	{
		color: theme.text.base,
		fontSize: theme.spacing(5),
		width: 'fit-content',
		height: 'fit-content',
		padding: theme.spacing(3, 6),
	},
]);
