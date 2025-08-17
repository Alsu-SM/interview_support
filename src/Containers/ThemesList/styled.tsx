import styled from '@emotion/styled';
import { createCSSFunction } from '../../Utils/createCSSFunction';
import { cssScrollbar } from '../../Utils/scrollbar';
import { cssThemeCard } from '../../Components/ThemeCard';

export const cssThemesListOrderedListWrapper = createCSSFunction(
	({ theme }) => [
		{
			display: 'grid',
			gap: theme.spacing(15),
			overflow: 'hidden auto',
			gridTemplateColumns: `repeat(auto-fit, minmax(450px, 1fr))`,
			gridAutoRows: 'min-content',
			background: theme.bg.secondary,
			padding: theme.spacing(14),
			borderRadius: theme.spacing(10),
			boxShadow: theme.boxShadow.primary,
			backdropFilter: theme.filter.blur.primary,
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
		color: theme.text.primary,
		fontSize: theme.spacing(5),
		width: 'fit-content',
		height: 'fit-content',
		padding: theme.spacing(3, 6),
	},
]);
