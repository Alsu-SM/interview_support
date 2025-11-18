import { useDispatch, useSelector } from 'react-redux';
import {
	createMaterial,
	editMaterial,
	getMaterial,
	getUI,
	ICreateMaterial,
	IMaterial,
	setMaterialToEdit,
	setThemeToCreateMaterial,
} from '../../Store';
import { IModalProps } from '../../Components/Modal';
import { useEffect, useState } from 'react';
import { CREATE_MATERIAL_DEFAULT } from './constants';
import { createSelector } from '@reduxjs/toolkit';
import { selectDataSlice } from '../../Store/utils';
import { IStoreType } from '../../Store/types';
import { IMarkDownProps } from '../../Components/Field';
import { ITextareaProps } from '../../Components/Textarea';
import { ITagsInputProps } from '../../Components/TagsInput';

export const useCreateEditMaterialModal = () => {
	const [material, setMaterial] = useState<ICreateMaterial['material']>(
		CREATE_MATERIAL_DEFAULT,
	);
	const [tagsInputValue, setTagsInputValue] =
		useState<ITagsInputProps['inputValue']>('');

	const dispatch = useDispatch();
	const { themeToCreateMaterial, materialToEdit } = useSelector(getUI);
	const getMaterialSelector = createSelector([selectDataSlice], (dataSlice) =>
		getMaterial({ dataSlice }, { id: materialToEdit ?? '' }),
	);

	const isEdit = !!materialToEdit;
	const isOpen = !!themeToCreateMaterial || isEdit;
	console.log(themeToCreateMaterial);
	const title = isEdit ? 'Edit Material' : 'Create Material';

	const materialData = useSelector<IStoreType, IMaterial | undefined>(
		getMaterialSelector,
	);

	const handleClose = () => {
		dispatch(
			isEdit
				? setMaterialToEdit({ id: null })
				: setThemeToCreateMaterial({ id: null }),
		);
	};

	const handleTitleChange: ITextareaProps['onChange'] = (event) => {
		setMaterial({ ...material, title: event.target.value });
	};

	const handleMaterialChange: IMarkDownProps['onChange'] = (value = '') => {
		setMaterial({ ...material, material: value });
	};

	const handleCreate = () => {
		dispatch(
			createMaterial({
				material: {
					...material,
					tags: Array.from(
						new Set([...material.tags, ...tagsInputValue.split(',')]),
					),
				},
			}),
		);
		dispatch(setThemeToCreateMaterial({ id: null }));
		setMaterial(CREATE_MATERIAL_DEFAULT);
	};

	const handleEdit = () => {
		if (materialToEdit) {
			dispatch(
				editMaterial({
					material: {
						...material,
						tags: Array.from(
							new Set([...material.tags, ...tagsInputValue.split(',')]),
						),
					},
					id: materialToEdit,
				}),
			);
			dispatch(setMaterialToEdit({ id: null }));
			setMaterial(CREATE_MATERIAL_DEFAULT);
		}
	};

	const handleTagsInputValueChange: ITagsInputProps['onInputChange'] = (
		value,
	) => {
		setTagsInputValue(value);
	};
	const handleTagsChange: ITagsInputProps['onTagsListChange'] = (tags) => {
		setMaterial({ ...material, tags });
	};

	const buttons: IModalProps['buttons'] = [
		{
			children: 'Cancel',
			key: 'cancel',
			onClick: handleClose,
		},
		{
			children: isEdit ? 'Update Material' : 'Create Material',
			key: 'create',
			onClick: isEdit ? handleEdit : handleCreate,
			primary: true,
			disabled: !material.material || !material.title,
		},
	];

	const materialFieldProps: ITextareaProps = {
		placeholder: 'Enter material title...',
		value: material.title,
		onChange: handleTitleChange,
	};

	const answerFieldProps: IMarkDownProps = {
		textareaProps: {
			placeholder: 'Enter material data...',
		},
		value: material.material,
		visibleDragbar: false,
		onChange: handleMaterialChange,
	};
	const tagsFieldProps: ITagsInputProps = {
		inputValue: tagsInputValue,
		onInputChange: handleTagsInputValueChange,
		tags: material.tags,
		onTagsListChange: handleTagsChange,
	};

	useEffect(() => {
		if (isEdit && materialData) {
			setMaterial({
				material: materialData.material,
				title: materialData.title,
				tags: materialData.tags,
				themeId: materialData.themeId,
			});
		}
	}, [isEdit, materialData]);

	useEffect(() => {
		if (!isEdit && themeToCreateMaterial) {
			setMaterial((currentMaterial) => ({
				...currentMaterial,
				themeId: themeToCreateMaterial,
			}));
		}
	}, [isEdit, themeToCreateMaterial]);

	return {
		open: isOpen,
		buttons,
		materialFieldProps,
		answerFieldProps,
		tagsFieldProps,
		title,
		handleClose,
	};
};
