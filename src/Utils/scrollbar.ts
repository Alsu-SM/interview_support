import { createCSSFunction } from './createCSSFunction';

export const cssScrollbar = createCSSFunction(({ theme }) => ({
	'&::-webkit-scrollbar': {
		width: theme.spacing(12),
		height: theme.spacing(12),
		borderRadius: theme.spacing(12),
		background: 'transparent',
	},
	'&::-webkit-scrollbar-track': {
		width: theme.spacing(4),
		height: theme.spacing(4),
		background: theme.bg.secondary,
		borderRadius: theme.spacing(12),
		border: `${theme.spacing(4)} solid transparent`,
		backgroundClip: 'padding-box',
	},
	'&::-webkit-scrollbar-thumb': {
		width: theme.spacing(4),
		height: theme.spacing(4),
		background: theme.bg.secondary,
		borderRadius: theme.spacing(12),
		border: `${theme.spacing(4)} solid transparent`,
		backgroundClip: 'padding-box',
	},
	'&::-webkit-scrollbar-button': {
		display: 'none',
	},
	'&::-webkit-scrollbar-corner': {
		background: 'transparent',
	},
}));
