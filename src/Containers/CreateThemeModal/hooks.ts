import { useDispatch, useSelector } from 'react-redux';
import {
	createTheme,
	getUI,
	ICreateTheme,
	setIsCreateThemeActive,
} from '../../Store';
import { IModalProps } from '../../Components/Modal';
import { useState } from 'react';
import { CREATE_THEME_DEFAULT } from './constants';
import { IInputProps } from '../../Components/Input';
import { ITextareaProps } from '../../Components/Textarea';

export const useCreateThemeModal = () => {
	const [theme, setTheme] =
		useState<ICreateTheme['theme']>(CREATE_THEME_DEFAULT);

	const dispatch = useDispatch();
	const { isCreateThemeActive: open } = useSelector(getUI);

	const handleClose = () => {
		dispatch(setIsCreateThemeActive({ isActive: false }));
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

	const buttons: IModalProps['buttons'] = [
		{
			children: 'Cancel',
			key: 'cancel',
			onClick: handleClose,
		},
		{
			children: 'Create Theme',
			key: 'create',
			onClick: handleCreate,
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

	return {
		open,
		buttons,
		inputProps,
		textareaProps,
		handleClose,
	};
};
