import styled from '@emotion/styled';
import { createCSSFunction } from '../../Utils/createCSSFunction';
import { cssScrollbar } from '../../Utils/scrollbar';

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
	{
		background: theme.bg.primary,
		border: 'none',
		padding: theme.spacing(5),
		color: theme.text.primary,
		width: theme.spacing(25),
		height: theme.spacing(25),
		borderRadius: '50%',
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'center',
		boxSizing: 'border-box',
		cursor: 'pointer',
		opacity: 0.7,
		marginLeft: 'auto',
		marginTop: 'auto',
		['&:hover']: {
			opacity: 1,
		},
	},
]);
