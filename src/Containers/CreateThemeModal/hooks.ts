import { useDispatch, useSelector } from 'react-redux';
import { getUI, ICreateTheme, setIsCreateThemeActive } from '../../Store';
import { IModalProps } from '../../Components/Modal';
import { useState } from 'react';
import { CREATE_THEME_DEFAULT } from './constants';

export const useCreateThemeModal = () => {
	const [theme, setTheme] =
		useState<ICreateTheme['theme']>(CREATE_THEME_DEFAULT);

	const dispatch = useDispatch();
	const { isCreateThemeActive: open } = useSelector(getUI);

	const handleClose = () => {
		dispatch(setIsCreateThemeActive({ isActive: false }));
	};

	const handleCreate = () => {};

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
		},
	];

	return { open, buttons, handleClose };
};
