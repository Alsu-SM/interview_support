import { Theme } from '@emotion/react';
import { createCSSFunction } from './createCSSFunction';

export const cssScrollbar = createCSSFunction<{
	small?: boolean;
	inverse?: boolean;
	theme: Theme;
}>(({ theme, inverse, small }) => {
	const base = small ? 2 : 4;

	return {
		'&::-webkit-scrollbar': {
			width: theme.spacing(base * 3),
			height: theme.spacing(base * 3),
			borderRadius: theme.spacing(base * 3),
			background: 'transparent',
		},
		'&::-webkit-scrollbar-track': {
			width: theme.spacing(base),
			height: theme.spacing(base),
			background: inverse ? theme.bg.inverse.secondary : theme.bg.secondary,
			borderRadius: theme.spacing(base * 3),
			border: `${theme.spacing(base)} solid transparent`,
			backgroundClip: 'padding-box',
		},
		'&::-webkit-scrollbar-thumb': {
			width: theme.spacing(base),
			height: theme.spacing(base),
			background: inverse ? theme.bg.inverse.secondary : theme.bg.secondary,
			borderRadius: theme.spacing(base * 3),
			border: `${theme.spacing(base)} solid transparent`,
			backgroundClip: 'padding-box',
		},
		'&::-webkit-scrollbar-button': {
			display: 'none',
		},
		'&::-webkit-scrollbar-corner': {
			background: 'transparent',
		},
	};
});
