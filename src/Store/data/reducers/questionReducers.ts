import { IDataSliceActions, IDataSliceReducers, IQuestion } from '../types';
import { getUUIDv7 } from '../../../Utils';

export const createQuestionReducer: IDataSliceReducers[IDataSliceActions.CreateQuestion] =
	(state, { payload }) => {
		if (!state) {
			return state;
		}

		const newQuestion = {
			...payload.question,
			id: getUUIDv7(),
			history: [],
			easeFactor: 0,
			interval: 0,
		};

		return {
			...state,
			themes: state.themes.map((theme) => ({
				...theme,
				questions: [newQuestion, ...theme.questions],
			})),
			questions: [newQuestion, ...state.questions],
		};
	};

export const deleteQuestionReducer: IDataSliceReducers[IDataSliceActions.DeleteQuestion] =
	(state, { payload }) => {
		if (!state) {
			return state;
		}

		return {
			...state,
			themes: state.themes.map((theme) => ({
				...theme,
				questions: theme.questions.filter(
					(question) => question.id !== payload.id,
				),
			})),
			questions: state.questions.filter(
				(question) => question.id !== payload.id,
			),
		};
	};

export const editQuestionReducer: IDataSliceReducers[IDataSliceActions.EditQuestion] =
	(state, { payload }) => {
		if (!state) {
			return state;
		}

		return {
			...state,
			themes: state.themes.map((theme) => ({
				...theme,
				questions: theme.questions.map((question) => {
					if (question.id === payload.id) {
						return { ...question, ...payload.question };
					}

					return question;
				}),
			})),
			questions: state.questions.map((question) => {
				if (question.id === payload.id) {
					return { ...question, ...payload.question };
				}

				return question;
			}),
		};
	};

export const reorderQuestionsReducer: IDataSliceReducers[IDataSliceActions.ReorderQuestions] =
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
						questions: payload.ids.reduce((questions: IQuestion[], id) => {
							const question = state.questions.find(
								(question) => question.id === id,
							);
							if (question) {
								questions.push(question);
							}

							return questions;
						}, []),
					};
				}

				return theme;
			}),
		};
	};

export const setThemeToCreateQuestionReducer: IDataSliceReducers[IDataSliceActions.SetThemeToCreateQuestion] =
	(state, { payload }) => {
		if (!state) {
			return state;
		}

		return {
			...state,
			ui: { ...state.ui, themeToCreateQuestion: payload.id },
		};
	};

export const setQuestionToDeleteReducer: IDataSliceReducers[IDataSliceActions.SetQuestionToDelete] =
	(state, { payload }) => {
		if (!state) {
			return state;
		}

		return {
			...state,
			ui: { ...state.ui, questionToDelete: payload.id },
		};
	};

export const setQuestionToEditReducer: IDataSliceReducers[IDataSliceActions.SetQuestionToEdit] =
	(state, { payload }) => {
		if (!state) {
			return state;
		}

		return {
			...state,
			ui: { ...state.ui, questionToEdit: payload.id },
		};
	};
