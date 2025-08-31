import { useDispatch, useSelector } from 'react-redux';
import {
	createTheme,
	editTheme,
	getTheme,
	getUI,
	ICreateTheme,
	ITheme,
	setIsCreateThemeActive,
	setThemeToEdit,
} from '../../Store';
import { IModalProps } from '../../Components/Modal';
import { useEffect, useState } from 'react';
import { CREATE_THEME_DEFAULT } from './constants';
import { IInputProps } from '../../Components/Input';
import { ITextareaProps } from '../../Components/Textarea';
import { createSelector } from '@reduxjs/toolkit';
import { selectDataSlice } from '../../Store/utils';
import { IStoreType } from '../../Store/types';

export const useCreateEditThemeModal = () => {
	const [theme, setTheme] =
		useState<ICreateTheme['theme']>(CREATE_THEME_DEFAULT);

	const dispatch = useDispatch();
	const { isCreateThemeActive, themeToEdit } = useSelector(getUI);
	const getThemeSelector = createSelector([selectDataSlice], (dataSlice) =>
		getTheme({ dataSlice }, { id: themeToEdit ?? '' }),
	);

	const isEdit = !!themeToEdit;
	const isOpen = isCreateThemeActive || isEdit;

	const title = isEdit ? 'Edit Theme' : 'Create Theme';

	const themeData = useSelector<IStoreType, ITheme | undefined>(
		getThemeSelector,
	);

	const handleClose = () => {
		dispatch(
			isEdit
				? setThemeToEdit({ id: null })
				: setIsCreateThemeActive({ isActive: false }),
		);
	};

	const handleNameChange: IInputProps['onChange'] = (event) => {
		setTheme({ ...theme, name: event.target.value });
	};

	const handleDescriptionChange: ITextareaProps['onChange'] = (event) => {
		setTheme({ ...theme, description: event.target.value });
	};

	const handleCreate = () => {
		dispatch(createTheme({ theme }));
		dispatch(setIsCreateThemeActive({ isActive: false }));
		setTheme(CREATE_THEME_DEFAULT);
	};

	const handleEdit = () => {
		if (themeToEdit) {
			dispatch(editTheme({ theme, id: themeToEdit }));
			dispatch(setThemeToEdit({ id: null }));
			setTheme(CREATE_THEME_DEFAULT);
		}
	};

	const buttons: IModalProps['buttons'] = [
		{
			children: 'Cancel',
			key: 'cancel',
			onClick: handleClose,
		},
		{
			children: isEdit ? 'Update Theme' : 'Create Theme',
			key: 'create',
			onClick: isEdit ? handleEdit : handleCreate,
			primary: true,
			disabled: !theme.name,
		},
	];

	const inputProps: IInputProps = {
		name: 'name',
		placeholder: 'e.g. React Fundamentals...',
		value: theme.name,
		onChange: handleNameChange,
	};

	const textareaProps: ITextareaProps = {
		name: 'description',
		placeholder: 'Brief description of this theme...',
		value: theme.description,
		onChange: handleDescriptionChange,
	};

	useEffect(() => {
		if (isEdit && themeData) {
			setTheme({
				name: themeData.name,
				description: themeData.description,
				questions: themeData.questions,
			});
		}
	}, [isEdit, themeData]);

	return {
		open: isOpen,
		buttons,
		inputProps,
		textareaProps,
		title,
		handleClose,
	};
};
