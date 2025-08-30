import { useDispatch, useSelector } from 'react-redux';
import {
	deleteQuestion,
	deleteTheme,
	getQuestion,
	getTheme,
	getUI,
	IQuestion,
	ITheme,
	setQuestionToDelete,
	setThemeToDelete,
} from '../../Store';
import { IModalProps } from '../../Components/Modal';
import { selectDataSlice } from '../../Store/utils';
import { createSelector } from '@reduxjs/toolkit';
import { IStoreType } from '../../Store/types';

export const useDeleteModal = () => {
	const dispatch = useDispatch();
	const { themeToDelete, questionToDelete } = useSelector(getUI);
	const isOpen = !!themeToDelete || !!questionToDelete;
	const isTheme = !!themeToDelete;

	const getThemeSelector = createSelector([selectDataSlice], (dataSlice) =>
		getTheme({ dataSlice }, { id: themeToDelete ?? '' }),
	);
	const getQuestionSelector = createSelector([selectDataSlice], (dataSlice) =>
		getQuestion({ dataSlice }, { id: questionToDelete ?? '' }),
	);

	const themeData = useSelector<IStoreType, ITheme | undefined>(
		getThemeSelector,
	);

	const questionData = useSelector<IStoreType, IQuestion | undefined>(
		getQuestionSelector,
	);

	const themeName = themeData?.name ? `"${themeData.name}"` : 'this theme';
	const questionName = questionData?.question
		? `"${questionData.question}"`
		: 'this question';
	const title = isTheme ? 'Delete Theme' : 'Delete Question';
	const message = isTheme
		? `Are you sure you want to delete ${themeName}? This action cannot be undone and will delete all questions in this theme.`
		: `Are you sure you want to delete ${questionName}? This action cannot be undone.`;

	const handleClose = () => {
		dispatch(
			isTheme
				? setThemeToDelete({ id: null })
				: setQuestionToDelete({ id: null }),
		);
	};

	const handleDelete = () => {
		dispatch(
			isTheme
				? deleteTheme({ id: themeToDelete })
				: deleteQuestion({ id: questionToDelete }),
		);
		handleClose();
	};

	const buttons: IModalProps['buttons'] = [
		{
			children: 'Cancel',
			key: 'cancel',
			onClick: handleClose,
		},
		{
			children: 'Delete',
			key: 'create',
			onClick: handleDelete,
			danger: true,
		},
	];

	return {
		open: isOpen,
		buttons,
		title,
		message,
		handleClose,
	};
};
