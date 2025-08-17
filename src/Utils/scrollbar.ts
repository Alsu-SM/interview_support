import { createCSSFunction } from './createCSSFunction';

export const cssScrollbar = createCSSFunction(({ theme }) => ({
	'&::-webkit-scrollbar': {
		width: theme.spacing(3),
		height: theme.spacing(3),
		borderRadius: theme.spacing(1.5),
		background: 'transparent',
	},
	'&::-webkit-scrollbar-track': {
		width: theme.spacing(1),
		height: theme.spacing(1),
		background: theme.text.tertiary,
		borderRadius: theme.spacing(1.5),
		border: `${theme.spacing(1)} solid transparent`,
		backgroundClip: 'padding-box',
	},
	'&::-webkit-scrollbar-thumb': {
		width: theme.spacing(1),
		height: theme.spacing(1),
		background: theme.text.secondary,
		borderRadius: theme.spacing(1.5),
		border: `${theme.spacing(1)} solid transparent`,
		backgroundClip: 'padding-box',
	},
	'&::-webkit-scrollbar-button': {
		display: 'none',
	},
	'&::-webkit-scrollbar-corner': {
		background: 'transparent',
	},
}));
