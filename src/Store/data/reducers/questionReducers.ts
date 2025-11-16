import {
	IDataSliceActions,
	IDataSliceReducers,
	IHistoryItem,
	IHistoryType,
	IQuestion,
} from '../types';
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
			themes: state.themes.map((theme) => {
				if (theme.id === payload.question.themeId)
					return {
						...theme,
						questions: [newQuestion, ...theme.questions],
					};
				return theme;
			}),
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

export const studyQuestionReducer: IDataSliceReducers[IDataSliceActions.StudyQuestion] =
	(state, { payload }) => {
		if (!state) {
			return state;
		}
		const historyItem: IHistoryItem = {
			id: payload.historyItemId,
			date: new Date(),
			type: IHistoryType.Check,
			result: payload.result,
		};

		return {
			...state,
			questions: state.questions.map((question) => {
				if (question.id === payload.id) {
					return { ...question, history: [...question.history, historyItem] };
				}

				return question;
			}),
			themes: state.themes.map((theme) => ({
				...theme,
				questions: theme.questions.map((question) => {
					if (question.id === payload.id) {
						return { ...question, history: [...question.history, historyItem] };
					}

					return question;
				}),
			})),
		};
	};

export const editStudyQuestionReducer: IDataSliceReducers[IDataSliceActions.EditStudyQuestion] =
	(state, { payload }) => {
		if (!state) {
			return state;
		}

		return {
			...state,
			questions: state.questions.map((question) => {
				if (question.id === payload.id) {
					return {
						...question,
						history: question.history.map((history) => {
							if (history.id === payload.historyItemId) {
								return { ...history, result: payload.result };
							}

							return history;
						}),
					};
				}

				return question;
			}),
			themes: state.themes.map((theme) => ({
				...theme,
				questions: theme.questions.map((question) => {
					if (question.id === payload.id) {
						return {
							...question,
							history: question.history.map((history) => {
								if (history.id === payload.historyItemId) {
									return { ...history, result: payload.result };
								}

								return history;
							}),
						};
					}

					return question;
				}),
			})),
		};
	};

export const readQuestionReducer: IDataSliceReducers[IDataSliceActions.ReadQuestion] =
	(state, { payload }) => {
		if (!state) {
			return state;
		}
		const historyItem: IHistoryItem = {
			id: getUUIDv7(),
			date: new Date(),
			type: IHistoryType.Read,
		};

		return {
			...state,
			questions: state.questions.map((question) => {
				if (question.id === payload.id) {
					return { ...question, history: [...question.history, historyItem] };
				}

				return question;
			}),
			themes: state.themes.map((theme) => ({
				...theme,
				questions: theme.questions.map((question) => {
					if (question.id === payload.id) {
						return { ...question, history: [...question.history, historyItem] };
					}

					return question;
				}),
			})),
		};
	};
