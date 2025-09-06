import { spacing } from './Utils/spacing';
export const SPACING_BASE = 2;

export const themeLight = {
	spacing: spacing(SPACING_BASE),
	transition: {
		duration: {
			standard: '75ms',
		},
		timing: {
			easeInOut: 'ease-in-out',
		},
	},
	filter: {
		blur: {
			primary: 'blur(4px)',
			secondary: 'blur(2px)',
		},
	},
	boxShadow: {
		primary: '0px 4px 4px 0 rgba(0,0,0,0.25)',
		secondary: '0px 4px 4px 0 rgba(0,0,0,0.1)',
	},
	bg: {
		page: 'url(/interview_support/images/bg.page.dark.png)',
		theme: 'url(/interview_support/images/bg.theme.dark.png)',
		primary: 'rgba(255, 255, 255, 0.4)',
		primaryOpaque: 'rgba(255, 255, 255, 1)',
		secondary: 'rgba(255, 255, 255, 0.3)',
		inverse: {
			primary: 'rgba(0,0,0,0.3)',
			secondary: 'rgba(0,0,0,0.1)',
		},
		accent: 'rgba(51,90, 174, 1)',
		accentDark: 'rgba(37, 62, 116, 1)',
		danger: 'rgba(215, 57, 57, 0.3)',
	},
	text: {
		primary: 'rgba(0, 0, 0, 0.8)',
		secondary: 'rgba(0, 0, 0, 0.5)',
		tertiary: 'rgba(0, 0, 0, 0.3)',
		danger: 'rgba(215, 57, 57, 1)',
	},
};
export type IAppTheme = typeof themeLight;

export const themeDark: IAppTheme = {
	...themeLight,
	bg: {
		page: 'url(/interview_support/images/bg.page.dark.png)',
		theme: 'url(/interview_support/images/bg.theme.dark.png)',
		primary: 'rgba(0,0,0, 0.4)',
		primaryOpaque: 'rgba(0,0,0, 1)',
		secondary: 'rgba(0,0,0, 0.1)',
		inverse: {
			primary: 'rgba(255, 255, 255,0.3)',
			secondary: 'rgba(255, 255, 255,0.1)',
		},
		accent: 'rgba(122,153, 221, 1)',
		accentDark: 'rgba(61, 81, 124, 1)',
		danger: 'rgba(215, 57, 57, 0.2)',
	},
	text: {
		primary: 'rgba(255, 255, 255, 0.8)',
		secondary: 'rgba(255, 255, 255, 0.5)',
		tertiary: 'rgba(255, 255, 255, 0.3)',
		danger: 'rgba(215, 57, 57, 1)',
	},
};
export const theme = {
	light: themeLight,
	dark: themeDark,
};
