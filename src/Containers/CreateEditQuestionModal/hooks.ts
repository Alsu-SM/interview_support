import { useDispatch, useSelector } from 'react-redux';
import {
	createQuestion,
	editQuestion,
	getQuestion,
	getUI,
	ICreateQuestion,
	IQuestion,
	setQuestionToEdit,
	setThemeToCreateQuestion,
} from '../../Store';
import { IModalProps } from '../../Components/Modal';
import { useEffect, useState } from 'react';
import { CREATE_QUESTION_DEFAULT } from './constants';
import { ITextareaProps } from '../../Components/Textarea';
import { createSelector } from '@reduxjs/toolkit';
import { selectDataSlice } from '../../Store/utils';
import { IStoreType } from '../../Store/types';

export const useCreateEditQuestionModal = () => {
	const [question, setQuestion] = useState<ICreateQuestion['question']>(
		CREATE_QUESTION_DEFAULT,
	);
	const dispatch = useDispatch();
	const { themeToCreateQuestion, questionToEdit } = useSelector(getUI);
	const getQuestionSelector = createSelector([selectDataSlice], (dataSlice) =>
		getQuestion({ dataSlice }, { id: questionToEdit ?? '' }),
	);

	const isEdit = !!questionToEdit;
	const isOpen = !!themeToCreateQuestion || isEdit;

	const title = isEdit ? 'Edit Question' : 'Create Question';

	const questionData = useSelector<IStoreType, IQuestion | undefined>(
		getQuestionSelector,
	);

	const handleClose = () => {
		dispatch(
			isEdit
				? setQuestionToEdit({ id: null })
				: setThemeToCreateQuestion({ id: null }),
		);
	};

	const handleQuestionChange: ITextareaProps['onChange'] = (event) => {
		setQuestion({ ...question, question: event.target.value });
	};

	const handleAnswerChange: ITextareaProps['onChange'] = (event) => {
		setQuestion({ ...question, answer: event.target.value });
	};

	const handleCreate = () => {
		dispatch(createQuestion({ question: question }));
		dispatch(setThemeToCreateQuestion({ id: null }));
		setQuestion(CREATE_QUESTION_DEFAULT);
	};

	const handleEdit = () => {
		if (questionToEdit) {
			dispatch(editQuestion({ question: question, id: questionToEdit }));
			dispatch(setQuestionToEdit({ id: null }));
			setQuestion(CREATE_QUESTION_DEFAULT);
		}
	};

	const buttons: IModalProps['buttons'] = [
		{
			children: 'Cancel',
			key: 'cancel',
			onClick: handleClose,
		},
		{
			children: isEdit ? 'Update Question' : 'Create Question',
			key: 'create',
			onClick: isEdit ? handleEdit : handleCreate,
			primary: true,
			disabled: !question.question || !question.answer,
		},
	];

	const questionFieldProps: ITextareaProps = {
		name: 'question',
		placeholder: 'Enter your question...',
		value: question.question,
		onChange: handleQuestionChange,
	};

	const answerFieldProps: ITextareaProps = {
		name: 'answer',
		placeholder: 'Enter the answer...',
		value: question.answer,
		onChange: handleAnswerChange,
	};

	useEffect(() => {
		if (isEdit && questionData) {
			setQuestion({
				question: questionData.question,
				answer: questionData.answer,
				tags: questionData.tags,
				themeId: questionData.themeId,
				isLearnt: questionData.isLearnt,
			});
		}
	}, [isEdit, questionData]);

	return {
		open: isOpen,
		buttons,
		questionFieldProps,
		answerFieldProps,
		title,
		handleClose,
	};
};
