import { spacing } from './Utils/spacing';
export const SPACING_BASE = 4;

export const themeLight = {
	spacing: spacing(SPACING_BASE),
	boxShadow: `0px 4px 4px rgba(0,0,0,0.25)`,
	bg: {
		base: '#DADADA',
		soft: '#C9C9C9',
		contrast: '#ACACAC',
	},
	text: {
		base: '#3B3939',
		soft: '#4B4949',
		muted: '#767676',
	},
	border: {
		muted: '#d0d4dc57',
		base: '#d0d4dc',
	},
};
export type IAppTheme = typeof themeLight;

export const themeDark: IAppTheme = {
	...themeLight,
	bg: {
		base: '#090909',
		soft: '#101010',
		contrast: '#282828',
	},
	text: {
		base: '#C9C9C9',
		soft: '#A7A2A2',
		muted: '#868686',
	},
	border: {
		muted: '#555b6857',
		base: '#1a1a1a',
	},
};
export const theme = {
	light: themeLight,
	dark: themeDark,
};
