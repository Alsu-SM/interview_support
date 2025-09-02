import { Theme } from '@emotion/react';
import { createCSSFunction } from './createCSSFunction';

export const cssScrollbar = createCSSFunction<{
	inverse?: boolean;
	theme: Theme;
}>(({ theme, inverse }) => ({
	'&::-webkit-scrollbar': {
		width: theme.spacing(12),
		height: theme.spacing(12),
		borderRadius: theme.spacing(12),
		background: 'transparent',
	},
	'&::-webkit-scrollbar-track': {
		width: theme.spacing(4),
		height: theme.spacing(4),
		background: inverse ? theme.bg.inverse.secondary : theme.bg.secondary,
		borderRadius: theme.spacing(12),
		border: `${theme.spacing(4)} solid transparent`,
		backgroundClip: 'padding-box',
	},
	'&::-webkit-scrollbar-thumb': {
		width: theme.spacing(4),
		height: theme.spacing(4),
		background: inverse ? theme.bg.inverse.secondary : theme.bg.secondary,
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
