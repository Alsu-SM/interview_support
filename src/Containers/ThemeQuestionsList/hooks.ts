import { useDispatch, useSelector } from 'react-redux';
import {
	getTheme,
	ITheme,
	reorderQuestions,
	setThemeToCreateQuestion,
} from '../../Store';
import { renderQuestion } from './renders';
import { IOrderedListProps } from '../../Components/OrderedList/types';
import { createSelector } from '@reduxjs/toolkit';
import { selectDataSlice } from '../../Store/utils';
import { IStoreType } from '../../Store/types';

export const useThemeQuestionsList = ({ themeId }: { themeId: string }) => {
	const getThemeSelector = createSelector([selectDataSlice], (dataSlice) =>
		getTheme({ dataSlice }, { id: themeId }),
	);

	const themeData = useSelector<IStoreType, ITheme | undefined>(
		getThemeSelector,
	);
	const dispatch = useDispatch();

	const isThemeNotFound = !themeData;

	const questionsList = themeData?.questions.map(renderQuestion) ?? [];

	const handleCreateQuestion = () => {
		dispatch(setThemeToCreateQuestion({ id: themeId }));
	};
	const handleReorder: IOrderedListProps['onReorder'] = (items) => {
		if (isThemeNotFound) {
			return;
		}

		dispatch(
			reorderQuestions({
				themeId: themeData.id,
				ids: items.map(({ id }) => id),
			}),
		);
	};

	return {
		isThemeNotFound,
		questionsList,
		handleReorder,
		handleCreateQuestion,
	};
};
