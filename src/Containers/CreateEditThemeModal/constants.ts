import { ICreateTheme } from '../../Store';

export const CREATE_THEME_DEFAULT: ICreateTheme['theme'] = {
	name: '',
	description: '',
	questions: [],
	materials: [],
};
