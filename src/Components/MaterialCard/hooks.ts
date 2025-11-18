import { ComponentProps } from 'react';
import { useNavigate } from 'react-router-dom';
import { IMaterial, setMaterialToDelete, setMaterialToEdit } from '../../Store';
import { useDispatch } from 'react-redux';
import { IButtonIconProps } from '../ButtonIcon';
import { renderTag } from '../Tag/utils';
import { format } from 'date-fns';
import { getLastReadStatus } from './utils';

export const useMaterialCard = ({ material }: { material: IMaterial }) => {
	const navigate = useNavigate();
	const dispatch = useDispatch();

	const lastRead = material.history.at(-1)?.date;

	const lastReadLabel = lastRead ? format(lastRead, 'dd.MM.yyyy HH:mm') : '';
	const lastReadStatus = getLastReadStatus(lastRead ?? null);
	const handleClick: ComponentProps<'button'>['onClick'] = () => {
		navigate(`/interview_support/material/${material.id}`);
	};

	const handleEdit: IButtonIconProps['onClick'] = (event) => {
		event.stopPropagation();
		dispatch(setMaterialToEdit({ id: material.id }));
	};

	const handleDelete: IButtonIconProps['onClick'] = (event) => {
		event.stopPropagation();
		dispatch(setMaterialToDelete({ id: material.id }));
	};

	const tags = material.tags.map((tag) => renderTag({ label: tag }));

	return {
		tags,
		lastReadLabel,
		lastReadStatus,
		handleClick,
		handleEdit,
		handleDelete,
	};
};
