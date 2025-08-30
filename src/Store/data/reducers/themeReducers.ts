import { IDataSliceActions, IDataSliceReducers, ITheme } from '../types';
import { getUUIDv7 } from '../../../Utils';

export const createThemeReducer: IDataSliceReducers[IDataSliceActions.CreateTheme] =
	(state, { payload }) => {
		if (!state) {
			return state;
		}

		return {
			...state,
			themes: [...state.themes, { ...payload.theme, id: getUUIDv7() }],
		};
	};

export const deleteThemeReducer: IDataSliceReducers[IDataSliceActions.DeleteTheme] =
	(state, { payload }) => {
		if (!state) {
			return state;
		}

		return {
			...state,
			themes: state.themes.filter((theme) => theme.id !== payload.id),
		};
	};

export const editThemeReducer: IDataSliceReducers[IDataSliceActions.EditTheme] =
	(state, { payload }) => {
		if (!state) {
			return state;
		}

		return {
			...state,
			themes: state.themes.map((theme) => {
				if (theme.id === payload.id) {
					return { ...theme, ...payload.theme };
				}

				return theme;
			}),
		};
	};

export const reorderThemesReducer: IDataSliceReducers[IDataSliceActions.ReorderTheme] =
	(state, { payload }) => {
		if (!state) {
			return state;
		}

		return {
			...state,
			themes: payload.ids.reduce((themes: ITheme[], id) => {
				const theme = state.themes.find((theme) => theme.id === id);
				if (theme) {
					themes.push(theme);
				}

				return themes;
			}, []),
		};
	};

export const setIsCreateThemeActiveReducer: IDataSliceReducers[IDataSliceActions.SetIsCreateThemeActive] =
	(state, { payload }) => {
		if (!state) {
			return state;
		}

		return {
			...state,
			ui: { ...state.ui, isCreateThemeActive: payload.isActive },
		};
	};

export const setThemeToDeleteReducer: IDataSliceReducers[IDataSliceActions.SetThemeToDelete] =
	(state, { payload }) => {
		if (!state) {
			return state;
		}

		return {
			...state,
			ui: { ...state.ui, themeToDelete: payload.id },
		};
	};

export const setThemeToEditReducer: IDataSliceReducers[IDataSliceActions.SetThemeToEdit] =
	(state, { payload }) => {
		if (!state) {
			return state;
		}

		return {
			...state,
			ui: { ...state.ui, themeToEdit: payload.id },
		};
	};
