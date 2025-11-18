import {
	IDataSliceActions,
	IDataSliceReducers,
	IHistoryItemRead,
	IHistoryType,
	IMaterial,
} from '../types';
import { getUUIDv7 } from '../../../Utils';
import { isSameDay } from 'date-fns';

export const createMaterialReducer: IDataSliceReducers[IDataSliceActions.CreateMaterial] =
	(state, { payload }) => {
		if (!state) {
			return state;
		}

		const newMaterial = {
			...payload.material,
			id: getUUIDv7(),
			history: [],
		};

		return {
			...state,
			themes: state.themes.map((theme) => {
				if (theme.id === payload.material.themeId)
					return {
						...theme,
						materials: [newMaterial, ...theme.materials],
					};
				return theme;
			}),
			materials: [newMaterial, ...state.materials],
		};
	};

export const deleteMaterialReducer: IDataSliceReducers[IDataSliceActions.DeleteMaterial] =
	(state, { payload }) => {
		if (!state) {
			return state;
		}

		return {
			...state,
			themes: state.themes.map((theme) => ({
				...theme,
				materials: theme.materials.filter(
					(material) => material.id !== payload.id,
				),
			})),
			materials: state.materials.filter(
				(material) => material.id !== payload.id,
			),
		};
	};

export const editMaterialReducer: IDataSliceReducers[IDataSliceActions.EditMaterial] =
	(state, { payload }) => {
		if (!state) {
			return state;
		}

		return {
			...state,
			themes: state.themes.map((theme) => ({
				...theme,
				materials: theme.materials.map((material) => {
					if (material.id === payload.id) {
						return { ...material, ...payload.material };
					}

					return material;
				}),
			})),
			materials: state.materials.map((material) => {
				if (material.id === payload.id) {
					return { ...material, ...payload.material };
				}

				return material;
			}),
		};
	};

export const reorderMaterialsReducer: IDataSliceReducers[IDataSliceActions.ReorderMaterials] =
	(state, { payload }) => {
		if (!state) {
			return state;
		}

		return {
			...state,
			themes: state.themes.map((theme) => {
				if (theme.id === payload.themeId) {
					return {
						...theme,
						materials: payload.ids.reduce((materials: IMaterial[], id) => {
							const material = state.materials.find(
								(material) => material.id === id,
							);
							if (material) {
								materials.push(material);
							}

							return materials;
						}, []),
					};
				}

				return theme;
			}),
		};
	};

export const setThemeToCreateMaterialReducer: IDataSliceReducers[IDataSliceActions.SetThemeToCreateMaterial] =
	(state, { payload }) => {
		if (!state) {
			return state;
		}

		return {
			...state,
			ui: { ...state.ui, themeToCreateMaterial: payload.id },
		};
	};

export const setMaterialToDeleteReducer: IDataSliceReducers[IDataSliceActions.SetMaterialToDelete] =
	(state, { payload }) => {
		if (!state) {
			return state;
		}

		return {
			...state,
			ui: { ...state.ui, materialToDelete: payload.id },
		};
	};

export const setMaterialToEditReducer: IDataSliceReducers[IDataSliceActions.SetMaterialToEdit] =
	(state, { payload }) => {
		if (!state) {
			return state;
		}

		return {
			...state,
			ui: { ...state.ui, materialToEdit: payload.id },
		};
	};

export const readMaterialReducer: IDataSliceReducers[IDataSliceActions.ReadMaterial] =
	(state, { payload }) => {
		if (!state) {
			return state;
		}
		const historyItem: IHistoryItemRead = {
			id: getUUIDv7(),
			date: new Date(),
			type: IHistoryType.Read,
		};

		const currentMaterial = state.materials.find(
			(material) => material.id === payload.id,
		);

		if (!currentMaterial) {
			return state;
		}

		const lastReadDate = currentMaterial.history.find(
			(item) => item.type === IHistoryType.Read,
		)?.date;

		const currentHistory =
			lastReadDate && isSameDay(lastReadDate, historyItem.date)
				? currentMaterial.history.map((item) => {
						if (isSameDay(item.date, historyItem.date)) {
							return { ...item, date: new Date() };
						}

						return item;
					})
				: [...currentMaterial.history, historyItem];

		return {
			...state,
			materials: state.materials.map((material) => {
				if (material.id === payload.id) {
					return { ...material, history: currentHistory };
				}

				return material;
			}),
			themes: state.themes.map((theme) => ({
				...theme,
				materials: theme.materials.map((material) => {
					if (material.id === payload.id) {
						return { ...material, history: currentHistory };
					}

					return material;
				}),
			})),
		};
	};
