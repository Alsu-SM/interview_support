import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import {
	editStudyQuestion,
	getThemeExtended,
	IHistoryResult,
	IHistoryType,
	IStudyQuestion,
	IThemeExtended,
	studyQuestion,
} from '../../Store';
import { IStoreType } from '../../Store/types';
import { createSelector } from '@reduxjs/toolkit';
import { selectDataSlice } from '../../Store/utils';
import { useEffect, useState } from 'react';
import { IThemeStudyDataItem } from './types';
import { createStudyDataInitial } from './utils';
import { renderTag } from '../../Components/Tag/utils';
import { renderThemeReview } from './renders';

export const usePageStudy = () => {
	const [currentIndex, setCurrentIndex] = useState(0);
	const [studyData, setStudyData] = useState<IThemeStudyDataItem[]>([]);
	const [shown, setShown] = useState(false);

	const { id } = useParams();

	const dispatch = useDispatch();
	const navigate = useNavigate();

	const getThemeExtendedSelector = createSelector(
		[selectDataSlice],
		(dataSlice) => getThemeExtended({ dataSlice }, { id: id ?? '' }),
	);

	const themeData = useSelector<IStoreType, IThemeExtended | undefined>(
		getThemeExtendedSelector,
	);

	const questionsLength = themeData?.questions.length ?? 0;
	const isDone = currentIndex === questionsLength;
	console.log({ currentIndex, questionsLength, isDone });
	const currentQuestion = isDone ? null : themeData?.questions.at(currentIndex);
	const currentStudyData = isDone ? null : studyData.at(currentIndex);

	const questionsCount = isDone
		? `All Done`
		: themeData
			? `Question ${currentIndex + 1} of ${questionsLength}`
			: '';
	const progress =
		questionsLength === 0
			? 100
			: Math.floor((currentIndex / questionsLength) * 100);

	const studiedStatistics =
		currentQuestion?.history.filter(
			(value) => value.type === IHistoryType.Check,
		).length ?? 0;
	const readStatistics =
		currentQuestion?.history.filter((value) => value.type === IHistoryType.Read)
			.length ?? 0;

	const statistics = `Studied ${studiedStatistics} times • Read ${readStatistics} times`;

	const themeReview = studyData.map(renderThemeReview);

	const tags = (currentQuestion?.tags ?? []).map((tag) =>
		renderTag({ label: tag }),
	);

	const handleGoBack = () => {
		navigate(id ? `/interview_support/theme/${id}` : `/interview_support/`);
	};

	const handleNext = () => {
		setCurrentIndex(
			Math.min(currentIndex + 1, themeData?.questions.length ?? 1),
		);
	};
	const handleShownToggle = () => {
		setShown(!shown);
	};
	const handleAnswer = (result: IHistoryResult) => {
		if (currentQuestion && currentStudyData) {
			const payload: IStudyQuestion = {
				id: currentQuestion.id,
				historyItemId: currentStudyData.id,
				result,
			};

			dispatch(
				currentStudyData.result
					? editStudyQuestion(payload)
					: studyQuestion(payload),
			);

			setStudyData((studyData) =>
				studyData.map((item) => {
					if (item.id === currentStudyData.id) {
						return {
							...item,
							result,
						};
					}
					return item;
				}),
			);

			handleShownToggle();
			handleNext();
		}
	};

	const handleRepeat = () => {
		setCurrentIndex(0);
	};

	useEffect(() => {
		setStudyData(createStudyDataInitial(themeData?.questions ?? []));
	}, [questionsLength]);

	return {
		themeData,
		currentQuestion,
		questionsCount,
		progress,
		tags,
		statistics,
		shown,
		isDone,
		themeReview,
		handleGoBack,
		handleAnswer,
		handleShownToggle,
		handleNext,
		handleRepeat,
	};
};
