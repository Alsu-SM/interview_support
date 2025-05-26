import { IDataSliceActions, IDataSliceReducers, IQuestion } from '../types';
import { getUUIDv7 } from '../../../Utils';

export const createQuestionReducer: IDataSliceReducers[IDataSliceActions.CreateQuestion] =
	(state, { payload }) => {
		if (!state) {
			return state;
		}

		return {
			...state,
			questions: [...state.questions, { ...payload.question, id: getUUIDv7() }],
		};
	};

export const deleteQuestionReducer: IDataSliceReducers[IDataSliceActions.DeleteQuestion] =
	(state, { payload }) => {
		if (!state) {
			return state;
		}

		return {
			...state,
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
