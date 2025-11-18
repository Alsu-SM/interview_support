import { ICreateQuestion } from '../../Store';

export const CREATE_QUESTION_DEFAULT: ICreateQuestion['question'] = {
	themeId: '',
	question: '',
	answer: '',
	tags: [],
};
