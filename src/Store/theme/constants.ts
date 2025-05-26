import { theme } from '../../theme';
import { IAppThemeSlice, IAppThemeSliceName, IAppThemeType } from './types';

export const APP_THEME_SLICE_NAME: IAppThemeSliceName = 'appThemeSlice';

export const APP_THEME_SLICE_DEFAULT: IAppThemeSlice = {
	theme: theme.dark,
	type: IAppThemeType.Dark,
	greetings: `Hi, alsushkaa! Let's study and get them offers!`,
};
