import { theme } from '../../theme';
import { IAppThemeSliceReducers } from './types';

export const changeThemeReducer: IAppThemeSliceReducers['changeAppTheme'] = (
	state,
	{ payload },
) => {
	if (!state) {
		return state;
	}

	return {
		...state,
		type: payload.theme,
		theme: theme[payload.theme],
	};
};

export const changeGreetingsReducer: IAppThemeSliceReducers['changeGreetings'] =
	(state, { payload }) => {
		if (!state) {
			return state;
		}

		return {
			...state,
			greetings: payload.greetings,
		};
	};
