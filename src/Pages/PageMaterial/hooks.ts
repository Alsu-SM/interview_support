import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { IStoreType } from '../../Store/types';
import { createSelector } from '@reduxjs/toolkit';
import { selectDataSlice } from '../../Store/utils';
import { renderTag } from '../../Components/Tag/utils';
import { getMaterial, IMaterial, readMaterial } from '../../Store';
import { format } from 'date-fns';

export const usePageMaterial = () => {
	const { id } = useParams();
	const navigate = useNavigate();
	const dispatch = useDispatch();

	const getMaterialSelector = createSelector([selectDataSlice], (dataSlice) =>
		getMaterial({ dataSlice }, { id: id ?? '' }),
	);

	const material = useSelector<IStoreType, IMaterial | undefined>(
		getMaterialSelector,
	);

	const lastRead = material?.history?.at(-1)?.date;

	const lastReadLabel = lastRead
		? `Последнее прочтение ${format(lastRead, 'dd.MM.yyyy HH:mm')}`
		: '';

	const themeId = material?.themeId;
	const goBackTitle = !!themeId ? 'Back to Theme' : 'Back to Dashboard';
	const tags = (material?.tags ?? []).map((tag) => renderTag({ label: tag }));

	const handleGoBack = () => {
		navigate(
			themeId ? `/interview_support/theme/${themeId}` : `/interview_support/`,
		);
	};
	const handleRead = () => {
		if (material) {
			dispatch(readMaterial({ id: material.id }));
		}
	};

	return {
		material,
		goBackTitle,
		tags,
		lastReadLabel,
		handleGoBack,
		handleRead,
	};
};
